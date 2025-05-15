import React, { useCallback, useEffect, useState } from 'react'
import { FileFullData, IFormData, IInputData } from '../types'
import Scripts from './clientScripts'
import clientScripts from './clientScripts'

/** Маршрутизация по SPA */
export const redirectSPA = (href: string) => {
	let element = document.createElement('a')
	element.href = href
	element.style.display = 'none'
	document.querySelector('body')?.appendChild(element)
	element.click()
	element.remove()
}

export default {
	redirectSPA,
}

/** Значения полей формы */
export interface IMap {}

/** Создание функции изменения состояния объекта со значениями формы */
export const useMapState = <T>(
	initialValue: T | (() => T)
): [T, (name: string, value: IInputData) => void, (values: T) => void] => {
	const [state, setState] = useState<T>(initialValue)

	/** Установка значений всех полей формы */
	const setValues = React.useCallback((values: T) => {
		setState(values)
	}, [])

	/** Установка одного значения формы */
	const setValue = React.useCallback((name: string, value: any) => {
		setState((currentState) => (currentState = { ...currentState, [name]: value } as T))
	}, [])

	return [state, setValue, setValues]
}

/** Открыть карточку контрагента */
export const openContractorPage = (id?: string) => {
	id
		? localStorage.setItem('medpultContractorId', id)
		: localStorage.removeItem('medpultContractorId')

	redirectSPA(Scripts.getContractorPageLink())
}

export function useDebounce<ValueType = any>(value: ValueType, delay: number): ValueType {
	// Состояние и сеттер для отложенного значения
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(
		() => {
			// Выставить debouncedValue равным value (переданное значение)
			// после заданной задержки
			const handler = setTimeout(() => {
				setDebouncedValue(value)
			}, delay)

			// Вернуть функцию очистки, которая будет вызываться каждый раз, когда ...
			// ... useEffect вызван снова. useEffect будет вызван снова, только если ...
			// ... value будет изменено (смотри ниже массив зависимостей).
			// Так мы избегаем изменений debouncedValue, если значение value ...
			// ... поменялось в рамках интервала задержки.
			// Таймаут очищается и стартует снова.
			// Что бы сложить это воедино: если пользователь печатает что-то внутри ...
			// ... нашего приложения в поле поиска, мы не хотим, чтобы debouncedValue...
			// ... не менялось до тех пор, пока он не прекратит печатать дольше, чем 500ms.
			return () => {
				clearTimeout(handler)
			}
		},
		// Вызывается снова, только если значение изменится
		// мы так же можем добавить переменную "delay" в массива зависимостей ...
		// ... если вы собираетесь менять ее динамически.
		[value]
	)

	return debouncedValue
}

type CreateFileArgs = {
	name: string,
	contentType: string,
	arrayBuffer: ArrayBuffer
}

/** Создание File для записи в input */
export function createFile({name, contentType, arrayBuffer}: CreateFileArgs) {
	const file = new File([arrayBuffer], name, {type: contentType});
	return file;
}

/** Скачать файл */
export function downloadFile(fileFullData: FileFullData) {
	const file = createFile({
		name: fileFullData.name, 
		contentType: fileFullData.type, 
		arrayBuffer: fileFullData.arrayBuffer
	})

	const a = document.createElement("a");
	a.setAttribute("href", URL.createObjectURL(file));
	a.setAttribute("download", fileFullData.name);
	a.click();

	const href = a.getAttribute("href");
	if(href) URL.revokeObjectURL(href);

	a.remove()
}

export async function onClickDownloadFile(fileId?: string) {
	if(!fileId) return;
	
	const fileFulldata = await Scripts.getFileFulldata(fileId);
	downloadFile(fileFulldata);
}

/** Скачать файл по URL */
export async function onClickDownloadFileByUrl(url?: string, fileName?: string) {
	try {
		if(!url) return;

		// const response = await fetch(url);
		// const blob = await response.blob();
		const response = await clientScripts.downloadFileBucket(url)
		const blob = new Blob([response.arrayBuffer], { type: response.contentType});
		const link = document.createElement("a");

		link.href = URL.createObjectURL(blob);
		link.download = fileName || url.substring(url.lastIndexOf("/") + 1);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(link.href); // Освобождаем URL, созданный createObjectURL
    } catch (error) {
		console.error("Ошибка при скачивании файла:", error);
    }
}