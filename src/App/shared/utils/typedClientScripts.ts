import { FileFullData, FilesData, FilesListData, InputDataString } from "../types"

/** Получить полные данные файла по id элмы */
async function getFileFulldata(fileId: string): Promise<FileFullData> {
	return {
		name: "447ddd78-f121-41a4-99ba-cd4f932bf2d7.png",
		type: "image/png",
		arrayBuffer: new ArrayBuffer()
	}
}



/** Заглушка ожидания ответа сервера */
function randomDelay() {
	const delay = Math.random() * 1000
	return new Promise((resolve) => {
		setTimeout(resolve, delay)
	})
}

/** Получение данных вложений по договору */
async function getFilesTreaty(): Promise<FilesListData> {
	const mockData: FilesData = {
		'dateFiles': new InputDataString('01.12.2023 12:00:00'),
		'nameFiles': new InputDataString('СБС_Омск(Стандарт АПП ПНД)'),
		'documenType': new InputDataString('Прочее'),
		'files': []
	}

	await randomDelay()
	return {
		data: Array(5).fill(0)
			.map((data, index) => {
				return { ...mockData, 'id': index }
			}),
		hasMore: true,
	}
}

/** Получение данных вложений по плану */
async function getFilesPlan(planId: string): Promise<FilesListData> {
	const mockData: FilesData = {
		'dateFiles': new InputDataString('01.12.2023 12:00:00'),
		'nameFiles': new InputDataString('СБС_Омск(Стандарт АПП ПНД)'),
		'documenType': new InputDataString('Прочее'),
		'files': []
	}

	await randomDelay()
	return {
		data: Array(5).fill(0)
			.map((data, index) => {
				return { ...mockData, 'id': `${index}` }
			}),
		hasMore: true,
	}
}

/** Получение данных вложений по программе */
async function getFilesProgram(programId: string): Promise<FilesListData> {
	const mockData: FilesData = {
		'dateFiles': new InputDataString('01.12.2023 12:00:00'),
		'nameFiles': new InputDataString('СБС_Омск(Стандарт АПП ПНД)'),
		'documenType': new InputDataString('Прочее'),
		'files': []
	}

	await randomDelay()
	return {
		data: Array(5).fill(0)
			.map((data, index) => {
				return { ...mockData, 'id': index }
			}),
		hasMore: true,
	}
}

export default {
	getFileFulldata,
	getFilesTreaty,
	getFilesPlan,
	getFilesProgram
}