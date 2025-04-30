import React from 'react'
import CustomInput from '../../CustomInput/CustomInput'
import LabledField from '../../LabledField/LabledField'
import { PlanDetailsData } from '../../../shared/types'
import CustomInputDate from '../../CustomInputDate/CustomInputDate'
import CustomSelect from '../../CustomSelect/CustomSelect'
import masks from '../../../shared/utils/masks'
import Scripts from '../../../shared/utils/clientScripts'
import CustomInputSearch from '../../CustomInputSearch/CustomInputSearch'
import CustomInputSearchMultiple from '../../CustomInputSearchMultiple/CustomInputSearchMultiple'
import CustomInputRegion from './CustomInputRegion/CustomInputRegion'

interface PlanDetailsGeneralTabProps {
	isViewMode: boolean
	values: PlanDetailsData
	setValue: (name: string, value: any) => void
}

/** Вкладка общее формы изменения плана страхования */
function PlanDetailsGeneralTab({ isViewMode, values, setValue }: PlanDetailsGeneralTabProps) {
	return (
		<div className="plan-details-general">
			<div className="plan-details-general__columns">
				<div className="plan-details-general__column">
					<LabledField label={'Номер'}>
						<CustomInput
							isViewMode={isViewMode}
							name="planNumber"
							inputHandler={setValue}
							values={values}
						/>
					</LabledField>
					<div className="plan-details-general__columns">
						<div className="plan-details-general__column">
							<LabledField label={'Дата начала'}>
								<CustomInputDate
									isViewMode={isViewMode}
									name="startDate"
									inputHandler={setValue}
									values={values}
								/>
							</LabledField>
						</div>
						<div className="plan-details-general__column">
							<LabledField label={'Дата окончания'}>
								<CustomInputDate
									isViewMode={isViewMode}
									name="endDate"
									inputHandler={setValue}
									values={values}
								/>
							</LabledField>
						</div>
					</div>
					<LabledField label={'Тип ЗХ'}>
						{/* <CustomSelect isViewMode={isViewMode} name='insuranceType' inputHandler={setValue} values={values} getDataHandler={Scripts.getInsuranceTypes} /> */}
						<CustomInputSearchMultiple
							isLoadOnClick={true}
							isViewMode={isViewMode}
							name="insuranceType"
							inputHandler={setValue}
							values={values}
							getDataHandler={Scripts.getInsuranceTypes}
						/>
					</LabledField>
					<LabledField label={'Возрастной коэффициент'}>
						<CustomInput
							isViewMode={isViewMode}
							name="ageFactor"
							inputHandler={setValue}
							values={values}
							maskFunction={masks.applyNumbersMask}
						/>
					</LabledField>
					<LabledField label={'Страховая премия по плану на 1 ЗХ, год'}>
						<CustomInput
							isViewMode={isViewMode}
							name="insurancePremium"
							inputHandler={setValue}
							values={values}
							maskFunction={masks.applyNumbersMask}
						/>
					</LabledField>
				</div>

				<div className="plan-details-general__column">
					<LabledField label={'Наименование'}>
						<CustomInput
							isViewMode={isViewMode}
							name="name"
							inputHandler={setValue}
							values={values}
						/>
					</LabledField>
					<LabledField label={'Предыдущий план'}>
						<CustomInputSearch
							isViewMode={isViewMode}
							name="previousPlan"
							inputHandler={setValue}
							values={values}
							getDataHandler={Scripts.getPlansByNumber}
							isLoadOnClick={true}
						/>
					</LabledField>
					<LabledField label={'Возраст'}>
						<div className="plan-age-input">
							<div className="plan-age-input__column">
								<CustomInput
									isViewMode={isViewMode}
									name="startAge"
									inputHandler={setValue}
									values={values}
									maskFunction={masks.applyNumbersMask}
								/>
								<CustomSelect
									isViewMode={isViewMode}
									name="startAgeMeasurement"
									inputHandler={setValue}
									values={values}
									getDataHandler={Scripts.getAgeMeasurements}
								/>
							</div>
							<div className="plan-age-input__separator">–</div>
							<div className="plan-age-input__column">
								<CustomInput
									isViewMode={isViewMode}
									name="endAge"
									inputHandler={setValue}
									values={values}
									maskFunction={masks.applyNumbersMask}
								/>
								<CustomSelect
									isViewMode={isViewMode}
									name="endAgeMeasurement"
									inputHandler={setValue}
									values={values}
									getDataHandler={Scripts.getAgeMeasurements}
								/>
							</div>
						</div>
					</LabledField>
					<LabledField label={'Коэффициент на родственника'}>
						<CustomInput
							isViewMode={isViewMode}
							name="relativeFactor"
							inputHandler={setValue}
							values={values}
							maskFunction={masks.applyNumbersMask}
						/>
					</LabledField>
					<LabledField label={'Страховая сумма по плану на 1 ЗХ, год'}>
						<CustomInput
							isViewMode={isViewMode}
							name="insuranceAmount"
							inputHandler={setValue}
							values={values}
							maskFunction={masks.applyNumbersMask}
						/>
					</LabledField>
				</div>

				<div className="plan-details-general__column">
					<LabledField label={'Тип плана'}>
						<CustomSelect
							isViewMode={isViewMode}
							name="type"
							inputHandler={setValue}
							values={values}
							getDataHandler={Scripts.getPlanTypes}
						/>
					</LabledField>
					<LabledField label={'Родительский план'}>
						<CustomInputSearch
							isViewMode={isViewMode}
							name="parentPlan"
							inputHandler={setValue}
							values={values}
							getDataHandler={Scripts.getPlansByNumber}
							isLoadOnClick={true}
						/>
					</LabledField>
					<LabledField label={'Регион включения'}>
						<CustomInputRegion regions={values.region} isInclude={true} />
					</LabledField>
					<LabledField label={'Медицинский коэффициент'}>
						<CustomInput
							isViewMode={isViewMode}
							name="medicalFactor"
							inputHandler={setValue}
							values={values}
							maskFunction={masks.applyNumbersMask}
						/>
					</LabledField>
					<LabledField label={'Регион исключения'}>
						<CustomInputRegion regions={values.regionExt} isInclude={false} />
						{/* <CustomInputSearch
							isLoadOnClick={true}
							isViewMode={isViewMode}
							name="regionExt"
							inputHandler={setValue}
							values={values}
							getDataHandler={Scripts.getAddressSuggestion}
						/> */}
					</LabledField>
				</div>
			</div>
		</div>
	)
}

export default PlanDetailsGeneralTab
