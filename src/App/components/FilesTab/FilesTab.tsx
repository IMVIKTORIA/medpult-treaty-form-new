import React, { useEffect, useState, useRef } from 'react'
import { FilesListData, ListColumnData, PlanTabProps } from '../../shared/types'
import CustomList from '../CustomList/CustomList'
import Scripts from '../../shared/utils/clientScripts'
import FilesDropdown from './FilesDropdown/FilesDropdown'
import { downloadFile, onClickDownloadFile, onClickDownloadFileByUrl } from '../../shared/utils/utils'

type FilesTabProps = {
	/** Функция получения файлов */
	getDataHandler: () => Promise<FilesListData>
}

/** Вкладка Вложения */
function FilesTab({getDataHandler}: FilesTabProps) {
	const [files, setFiles] = useState<FilesListData>();

	/** Обработчик нажатия на кнопку скачать */
	const handleDownloadClick = (fileId: string) => {
		if(!files) return;

		// Поиск данных файла из буфера
		const file = files?.data.find(fileData => fileData.id === fileId);
		
		// Скачивание файла
		onClickDownloadFileByUrl(file?.fileDownloadURL, file?.nameFiles.value)
	}
	
	/** Обработчик получения данных по файлам */
	const getFiles = async () => {
		// Получение данных файлов
		const files = await getDataHandler();

		// Сохранение в буфер
		setFiles(files);

		return files;
	}


	/** Колонки списка */
	const columns = [
		new ListColumnData({ name: 'Дата', code: 'dateFiles', fr: 1, isSortable: true }),
		new ListColumnData({ name: 'Наименование', code: 'nameFiles', fr: 2, isSortable: true }),
		new ListColumnData({ name: 'Вид документа', code: 'documenType', fr: 1, isSortable: true }),
		new ListColumnData({
			name: '',
			code: 'id',
			fr: 0.5,
			isIcon: true,
			isLink: true,
			onClick: handleDownloadClick,
		}),
	]

	return (
		<div className="amendment-tab">
			<CustomList
				columnsSettings={columns}
				getDataHandler={getFiles}
				isScrollable={false}
			/>
		</div>
	)
}	

export default FilesTab
