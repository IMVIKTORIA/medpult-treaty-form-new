import React, { useState } from 'react'
import TabsWrapperNew from '../../TabsWrapper/TabsWrapperNew/TabsWrapperNew'
import TabItem from '../../TabItem/TabItem'
import PlanDetailsGeneralTab from '../PlanDetailsGeneralTab/PlanDetailsGeneralTab'
import {
	DetailsProps,
	InputDataCategory,
	InputDataString,
	ListColumnData,
	PlanDetailsData,
	TouSearchData,
	IInputData,
	PlanRowData,
} from '../../../shared/types'
import CustomListRow from '../../CustomList/CustomListRow/CustomListRow'
import Scripts from '../../../shared/utils/clientScripts'
import Loader from '../../Loader/Loader'
import TouTab from '../TouTab/TouTab'
import FilesTab from '../../FilesTab/FilesTab'
import PlanDetailsProgramsTab from '../PlanDetailsProgramsTab/PlanDetailsProgramsTab'

class PlanDetailsProps implements DetailsProps {
	data: PlanRowData
	values: PlanDetailsData
	setValue: (name: string, value: any) => void
	setValues: (values: PlanDetailsData) => void
	columnsSettings: ListColumnData[]
	onClickRowHandler: () => any
	reloadData: () => void
}

/** Форма редактирования/просмотра плана страхования */
function PlanDetails(props: PlanDetailsProps) {
	const { data, values, setValue, setValues, columnsSettings, onClickRowHandler, reloadData } =
		props
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isViewMode, setIsViewMode] = useState<boolean>(true)

	React.useLayoutEffect(() => {
		setIsLoading(true)
		// Получить полные данные по data.id
		Scripts.getPlanFulldata(data.id).then((fullData) => {
			setIsLoading(false)
			// Присвоить полные данные в состояние
			setValues(fullData as unknown as PlanDetailsData)
		})
	}, [])

	/** Получение данных строки с данными формы */
	const getRowData = () => {
		if (isLoading) {
			return data
		}

		// Формирование строки с возрастом
		const age = `от ${values.startAge.value} ${
			values.startAgeMeasurement.value !== values.endAgeMeasurement.value
				? values.startAgeMeasurement.value
				: ''
		} до ${values.endAge.value} ${values.endAgeMeasurement.value}`

		const dataWithValues: PlanRowData = {
			...data,
			number: new InputDataCategory(values.planNumber.value),
			title: values.name,
			type: values.type,
			age: new InputDataString(age),
			startDate: values.startDate,
			endDate: values.endDate,
			parentPlan: new InputDataCategory(values.parentPlan.value),
		}

		return dataWithValues as any
	}

	const [touValues, setTouValues] = useState<TouSearchData>(new TouSearchData())
	/** Установка значения поля поиска ТOУ */
	const setValueSearch = (name: string, value: IInputData) => {
		setTouValues({ ...touValues, [name]: value })
	}

	return (
		<>
			<CustomListRow
				data={getRowData()}
				columnsSettings={columnsSettings}
				setOpenRowIndex={onClickRowHandler}
				isClickable
				isOpen
				reloadData={function () {}}
			/>
			{isLoading ? (
				<div className="plan-details">
					<Loader />
				</div>
			) : (
				<div className="plan-details">
					<TabsWrapperNew>
						<TabItem code={'general'} name={'Общее'}>
							<PlanDetailsGeneralTab isViewMode={isViewMode} values={values} setValue={setValue} />
						</TabItem>
						<TabItem code={'programs'} name={'Программы'}>
							<PlanDetailsProgramsTab data={data}/>
						</TabItem>
						<TabItem code={'tou'} name={'ТОУ'}>
							<TouTab isViewMode={isViewMode} values={touValues} handler={setValueSearch} />
						</TabItem>
						<TabItem code={'filesPlan'} name={'Вложения на план'}>
							<FilesTab getDataHandler={() => Scripts.getFilesPlan(props.data.id)} />
						</TabItem>
					</TabsWrapperNew>
				</div>
			)}
		</>
	)
}

export default PlanDetails
