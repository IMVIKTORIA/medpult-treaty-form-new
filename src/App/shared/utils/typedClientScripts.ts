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
		'id': "test",
		'fileDownloadURL': "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
		'dateFiles': new InputDataString('01.12.2023 12:00:00'),
		'nameFiles': new InputDataString('СБС_Омск(Стандарт АПП ПНД)'),
		'documenType': new InputDataString('Прочее'),
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

/** Получение количества вложений по плану */
async function  getFilesCountPlan(planId: string) {
	return 5;
}

/** Получение данных вложений по плану */
async function getFilesPlan(planId: string): Promise<FilesListData> {
	const mockData: FilesData = {
		'id': "test",
		'fileDownloadURL': "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
		'dateFiles': new InputDataString('01.12.2023 12:00:00'),
		'nameFiles': new InputDataString('СБС_Омск(Стандарт АПП ПНД)'),
		'documenType': new InputDataString('Прочее'),
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
		'id': "test",
		'fileDownloadURL': "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
		'dateFiles': new InputDataString('01.12.2023 12:00:00'),
		'nameFiles': new InputDataString('СБС_Омск(Стандарт АПП ПНД)'),
		'documenType': new InputDataString('Прочее'),
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

/** Скачать файл из внешней системы */
async function downloadFileBucket(url: string, fileName: string): Promise<{arrayBuffer: ArrayBuffer;contentType: string;}> {
	// TODO
	const file = await fetch(url);

	return {
		arrayBuffer: await file.arrayBuffer(),
		contentType: file.headers.get("content-type") ?? 'application/octet-stream'
	}
}

export default {
	getFileFulldata,
	getFilesTreaty,
	getFilesPlan,
	getFilesProgram,

	getFilesCountPlan,
	downloadFileBucket
}