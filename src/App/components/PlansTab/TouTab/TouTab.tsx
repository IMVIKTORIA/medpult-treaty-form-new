import React, { useState, useEffect } from 'react'
import { InputDataCategory, TouSearchData, ListColumnData, TabProps } from '../../../shared/types'
import CustomInput from '../../CustomInput/CustomInput'
import Button from '../../Button/Button'
import CustomSelectList from '../../CustomSelect/CustomSelect'
import icons from '../../../shared/icons'
import CustomList from '../../CustomList/CustomList'
import Scripts from '../../../shared/utils/clientScripts'

interface TouTabProps extends Omit<TabProps, 'values' | 'saveStateHandler' | 'setActionHandlers'> {
	values: TouSearchData
}

/** Вкладка Тоу */
function TouTab({ values, handler }: TouTabProps) {
	const [onClickSearch, setOnClickSearch] = useState<any>()

	// Обработчик нажатия на Enter
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Enter' && onClickSearch) {
				onClickSearch()
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [onClickSearch])

	const buttonTitle = (
		<div className="tou-search-button">
			<div className="tou-search-button__icon">{icons.Search}</div>
			<div className="tou-search-button__title">Поиск</div>
		</div>
	)

	/** Колонки списка */
	const columns = [
		new ListColumnData({ name: 'Код тоу', code: 'codeTou', fr: 1, isSortable: true }),
		new ListColumnData({ name: 'Наименование', code: 'nameTou', fr: 1, isSortable: true }),
		new ListColumnData({ name: 'Адрес', code: 'adress', fr: 1, isSortable: true }),
		new ListColumnData({ name: 'Доступ', code: 'access', fr: 1, isSortable: true }),
		new ListColumnData({ name: 'ВМП', code: 'typeMedical', fr: 1, isSortable: true }),
		new ListColumnData({ name: 'Франшиза', code: 'franchise', fr: 1, isSortable: true }),
		new ListColumnData({ name: 'Дата включения', code: 'dateInclusion', fr: 1, isSortable: true }),
		new ListColumnData({ name: 'Дата исключения', code: 'dateExclusion', fr: 1, isSortable: true }),
		new ListColumnData({ name: 'Договор ЛПУ', code: 'contractLpu', fr: 1, isSortable: true }),
	]

	return (
		<div className="tou-tab">
			<div className="tou-tab__search">
				<CustomInput
					inputHandler={handler}
					values={values}
					name="nameTou"
					placeholder="Наименование ТОУ"
				/>
				<CustomInput inputHandler={handler} values={values} name="adress" placeholder="Адрес" />
				<CustomSelectList
					inputHandler={handler}
					getDataHandler={Scripts.getSorts}
					values={values}
					name="typeMedical"
					placeholder="Виды медицинской помощи"
				/>
				<Button clickHandler={onClickSearch} title={buttonTitle} style={{ height: '100%' }} />
			</div>
			<div className="tou-tab__list">
				<CustomList
					columnsSettings={columns}
					searchData={values}
					setSearchHandler={setOnClickSearch}
					getDataHandler={Scripts.getTou}
				/>
			</div>
		</div>
	)
}

export default TouTab
