import React, {
	ButtonHTMLAttributes,
	ReactNode,
	useEffect,
	useReducer,
	useRef,
	useState,
} from 'react'
import { FilesData, IInputData, ListColumnData, SortData } from '../../../shared/types'
import icons from '../../../shared/icons'

interface ListColumnProps extends ListColumnData {
	data: (IInputData | string | FilesData[])
}

function CustomListRowColumn(props: ListColumnProps) {
	const { fr, fixedWidth, data, isLink, onClick, isIcon } = props
	
	const onClickColumn =
		isLink && onClick
			? (ev: any) => {
					ev.stopPropagation()
					onClick(data)
			  }
			: () => {}
	const iconToShow = icons.Download
	
	/** Проверка на отображение иконки скачивания TODO: Проработать типы данных */
	const checkIsShowIconByData = () => {
		const currData = data as any; // TODO: Проработать типы данных
		if(!currData) return false;

		if(Array.isArray(currData)) return currData.length > 0;

		return true
	}

	const value = data.hasOwnProperty("value") ? (data as IInputData).value : undefined;
	
	return (
		<div
			className={
				isLink ? 'custom-list-row-column custom-list-row-column__link' : 'custom-list-row-column'
			}
			style={fixedWidth ? { width: fixedWidth } : { flex: fr }}
		>
			<span
				title={isIcon ? 'вложение' : value}
				onClick={onClickColumn}
				style={{ cursor: isIcon ? 'pointer' : 'default' }}
			>
				{isIcon && checkIsShowIconByData() && iconToShow}
				{!isIcon && value}
			</span>
		</div>
	)
}

export default CustomListRowColumn
