import React, { useEffect, useState } from 'react'

import Panel from '../../components/Panel/Panel'
import TabItem from '../../components/TabItem/TabItem'
import TabsWrapper from '../../components/TabsWrapper/TabsWrapper'
import GeneralTab from '../../components/GeneralTab/GeneralTab'
import Button from '../../components/Button/Button'
import { IFormData, IInputData, InsuredSearchData, TreatyFormData } from '../../shared/types'
import Scripts from '../../shared/utils/clientScripts'
import {
	localStorageDraftKey,
	localStorageDraftKeyInsuredId,
	localStorageIdKey,
} from '../../shared/utils/constants'
import SidesTab from '../../components/SidesTab/SidesTab'
import InsuredTab from '../../components/InsuredTab/InsuredTab'
import PlansTab from '../../components/PlansTab/PlansTab'
import { useMapState } from '../../shared/utils/utils'
import AmendmentTab from '../AmendmentTab/AmendmentTab'
import Loader from '../Loader/Loader'
import FilesTab from '../FilesTab/FilesTab'

enum TabCodes {
	general = 'general',
	sides = 'sides',
	insured = 'insured',
	insurancePlans = 'insurancePlans',
	agreementsAdditional = 'agreementsAdditional',
	files = 'files',
}
/** Форма договора */
export default function TreatyForm() {
	const [isViewMode, setIsViewMode] = useState<boolean>(true)

	// Обработчик нажатия на кнопку добавить
	const [addHandler, setAddHandler] = useState<() => void>()
	// Обработчик нажатия на кнопку редактировать
	const [editHandler, setEditHandler] = useState<() => void>()
	// Обработчик нажатия на кнопку удалить
	const [deleteHandler, setDeleteHandler] = useState<() => void>()
	// Код активной вкладки
	const [activeTabCode, setActiveTabCode] = useState<string>()

	const setActionHandlers = {
		setAddHandler,
		setEditHandler,
		setDeleteHandler,
	}

	const [values, setValue, setValues] = useMapState<IFormData>(new TreatyFormData())
	const [insuredValues, setInsuredValues] = useState<InsuredSearchData>(new InsuredSearchData())

	/** Установка значения поля поиска застрахованного */
	const setValueSearch = (name: string, value: IInputData) => {
		setInsuredValues({ ...insuredValues, [name]: value })
	}

	const [isInitializing, setIsInitializing] = useState<boolean>(true)
	// Подгрузка данных
	useEffect(() => {
		const initialize = async () => {
			setIsInitializing(true)

			try {
				await Scripts.OnInit?.()

				// Загрузить данные из черновика
				const draftData = localStorage.getItem(localStorageDraftKey)
				localStorage.removeItem(localStorageDraftKey)

				if (draftData) {
					const data = JSON.parse(draftData)
					setValues(data.values)
					setIsViewMode(data.isViewMode)
					setActiveTabCode(data.activeTabCode)
					return
				}

				// Проверка наличия insuredId
				const insuredId = localStorage.getItem(localStorageDraftKeyInsuredId)
				if (insuredId) {
					setActiveTabCode(TabCodes.insured)
				}

				// Загрузка данных из системы
				const data = await Scripts.getTreaty()
				setValues(data)
			} catch (error) {
				console.error('Ошибка инициализации:', error)
			} finally {
				setIsInitializing(false)
			}
		}
		initialize()
	}, [])

	// Получение данных договора
	// React.useLayoutEffect(() => {
	// 	// Получение данных из черновика
	// 	const draftData = localStorage.getItem(localStorageDraftKey)
	// 	localStorage.removeItem(localStorageDraftKey)
	// 	if (draftData) {
	// 		const data = JSON.parse(draftData);

	// 		setValues(data.values);
	// 		setIsViewMode(data.isViewMode);
	// 		setActiveTabCode(data.activeTabCode);

	// 		return;
	// 	}

	// 	// Получение данных из черновика
	// 	const insuredId = localStorage.getItem(localStorageDraftKeyInsuredId)
	// 	if (insuredId) {
	// 		setActiveTabCode(TabCodes.insured);
	// 	}

	// 	// Получение данных из Системы
	// 	const dataPromise: Promise<IFormData> = Scripts.getTreaty();
	// 	dataPromise.then((data) => {
	// 		setValues(data)
	// 	})
	// }, [])

	// Debug
	useEffect(() => {
		console.log(values)
	}, [values])

	/** Нажатие на кнопку Изменить */
	const onClickEdit = () => {
		setIsViewMode(false)
	}

	/** Нажатие на кнопку сохранить */
	const onClickSave = async () => {
		await Scripts.saveTreaty(values)
		setIsViewMode(true)
	}

	/** Сохранить состояние в localStorage */
	const saveState = () => {
		const dataValues = values
		const dataIsViewMode = isViewMode
		const dataActiveTabCode = activeTabCode

		const data = JSON.stringify({
			values: dataValues,
			isViewMode: dataIsViewMode,
			activeTabCode: dataActiveTabCode,
		})

		localStorage.setItem(localStorageDraftKey, data)

		localStorage.setItem(localStorageIdKey, values.treaty.data.code)
	}

	/** Кнопка Изменить или Сохранить взависимости от режима формы */
	const formActionButton = isViewMode ? (
		<Button clickHandler={onClickEdit} buttonType="outline" title="ИЗМЕНИТЬ" />
	) : (
		<Button clickHandler={onClickSave} buttonType="outline" title="СОХРАНИТЬ" />
	)

	/** Заголовок панели */
	const panelLabel = values.number.value
		? `Договор ${values.number.value} от ${values.conclusionDate.value} (${values.status.value})`
		: 'Новый договор'

	/** Закрытие задачи */
	const handleCloseTreaty = () => {
		history.back()
	}

	//количество вложений
	const [elementsCount, setElementsCount] = useState<number>(0)
	const fetchElementsCount = async () => {
		const count = await Scripts.getFilesCountProgram()
		setElementsCount(count)
	}
	// Вычислить количество вложений
	useEffect(() => {
		fetchElementsCount()
	}, [])

	return (
		<>
			<div style={{ background: '#F2F4F6', padding: '10px', minHeight: '100%' }}>
				{isInitializing && (
					<div className="treaty-form__loader">
						<Loader />
					</div>
				)}
				{!isInitializing && (
					<>
						<Panel label={panelLabel} isRollable={false}>
							<TabsWrapper
								setActiveTabCodeGlobal={setActiveTabCode}
								activeTabCodeGlobal={activeTabCode}
								addHandler={addHandler}
								editHandler={editHandler}
								deleteHandler={deleteHandler}
							>
								<TabItem code={'general'} name={'Общее'}>
									<GeneralTab
										handler={setValue}
										values={values}
										isViewMode={isViewMode}
										saveStateHandler={saveState}
										setActionHandlers={setActionHandlers}
									/>
								</TabItem>
								<TabItem code={'sides'} name={'Стороны'}>
									<SidesTab
										handler={setValue}
										values={values}
										isViewMode={isViewMode}
										saveStateHandler={saveState}
										setActionHandlers={setActionHandlers}
									/>
								</TabItem>
								<TabItem code={'insured'} name={'Застрахованные'}>
									<InsuredTab
										handler={setValueSearch}
										values={insuredValues}
										isViewMode={isViewMode}
										saveStateHandler={saveState}
										setActionHandlers={setActionHandlers}
									/>
								</TabItem>
								<TabItem code={'insurancePlans'} name={'Планы страхования'}>
									<PlansTab
										handler={() => {}}
										values={values}
										isViewMode={isViewMode}
										saveStateHandler={saveState}
										setActionHandlers={setActionHandlers}
									/>
								</TabItem>
								<TabItem code={'agreementsAdditional'} name={'Доп соглашения'}>
									<AmendmentTab
										handler={() => {}}
										values={values}
										isViewMode={isViewMode}
										saveStateHandler={saveState}
										setActionHandlers={setActionHandlers}
									/>
								</TabItem>
								<TabItem code={'files'} name={`Вложения по договору (${elementsCount})`}>
									<FilesTab getDataHandler={Scripts.getFilesTreaty}/>
								</TabItem>
							</TabsWrapper>
							<div
								style={{
									padding: '0 18px 18px 18px',
									textAlign: 'right',
									display: 'flex',
									gap: '18px',
									flexDirection: 'row',
									justifyContent: 'flex-end',
								}}
							>
								{/* {formActionButton}
								<Button clickHandler={handleCloseTreaty} title="ЗАКРЫТЬ" /> */}
							</div>
						</Panel>
					</>
				)}
			</div>
		</>
	)
}
