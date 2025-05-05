import React, { useEffect, useState, useRef } from 'react'
import { FilesListData, ListColumnData, PlanTabProps } from '../../shared/types'
import CustomList from '../CustomList/CustomList'
import Scripts from '../../shared/utils/clientScripts'
import FilesDropdown from './FilesDropdown/FilesDropdown'
import { downloadFile, onClickDownloadFile } from '../../shared/utils/utils'

type FilesTabProps = {
	/** Функция получения файлов */
	getDataHandler: () => Promise<FilesListData>
}

/** Вкладка Вложения */
function FilesTab({getDataHandler}: FilesTabProps) {
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
			onClick: onClickDownloadFile,
		}),
	]

	return (
		<div className="amendment-tab">
			<CustomList
				columnsSettings={columns}
				// getDataHandler={Scripts.getFilesTreaty}
				getDataHandler={getDataHandler}
				isScrollable={false}
			/>
		</div>
	)
}	

export default FilesTab
