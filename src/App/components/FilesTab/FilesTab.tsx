import React, { useEffect, useState, useRef } from 'react'
import { ListColumnData, PlanTabProps } from '../../shared/types'
import CustomList from '../CustomList/CustomList'
import Scripts from '../../shared/utils/clientScripts'
import FilesDropdown from './FilesDropdown/FilesDropdown'

/** Вкладка Вложения */
function FilesTab({}: PlanTabProps) {
	/** Скачать файл */
	const onSaveFile = async () => {
		console.log(' файл')
	}

	/** Колонки списка */
	const columns = [
		new ListColumnData({ name: 'Дата', code: 'dateFiles', fr: 1, isSortable: true }),
		new ListColumnData({ name: 'Наименование', code: 'nameFiles', fr: 2, isSortable: true }),
		new ListColumnData({ name: 'Вид документа', code: 'documenType', fr: 1, isSortable: true }),
		new ListColumnData({
			name: '',
			code: 'files',
			fr: 0.5,
			isIcon: true,
			isLink: true,
			onClick: onSaveFile,
		}),
	]

	return (
		<div className="amendment-tab">
			<CustomList
				columnsSettings={columns}
				getDataHandler={Scripts.getFilesTreaty}
				isScrollable={false}
			/>
		</div>
	)
}

export default FilesTab
