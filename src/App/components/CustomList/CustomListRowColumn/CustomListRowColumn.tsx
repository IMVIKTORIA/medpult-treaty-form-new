import React, {
	ButtonHTMLAttributes,
	ReactNode,
	useEffect,
	useReducer,
	useRef,
	useState,
} from 'react'
import { IInputData, ListColumnData, SortData } from '../../../shared/types'
import icons from '../../../shared/icons'

interface ListColumnProps extends ListColumnData {
	data: IInputData
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

	return (
		<div
			className={
				isLink ? 'custom-list-row-column custom-list-row-column__link' : 'custom-list-row-column'
			}
			style={fixedWidth ? { width: fixedWidth } : { flex: fr }}
		>
			<span
				title={isIcon ? 'вложение' : data.value}
				onClick={onClickColumn}
				style={{ cursor: isIcon ? 'pointer' : 'default' }}
				// className={isIcon ? 'custom-list-row-column__icon' : undefined}
			>
				{isIcon && checkIsShowIconByData() && iconToShow}
				{!isIcon && data.value}
			</span>
		</div>
	)
}

export default CustomListRowColumn
