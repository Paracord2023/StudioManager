import { CID } from "../constants.json"

export const wizardConfig = [
    {
        "addEquipmentList": {
            title: 'Create equipment',
            fields: [
                {
                    fieldLabel: "Name",
                    fieldType: "text",
                    fieldName: "name",
                    isClass: false,
                    classDataUrl: '',
                },
                {
                    fieldLabel: "Equipment type",
                    fieldType: "text",
                    fieldName: "equipmentTypeId",
                    isClass: true,
                    classDataUrl: CID.EQUIPMENT_TYPE,
                },
                {
                    fieldLabel: "Quantity",
                    fieldType: "number",
                    fieldName: "quantity",
                    isClass: false,
                    classDataUrl: '',
                },
            ],
            formBuilderGroupFields: [
                {
                    fieldKey: 'name',
                    fieldValue: ''
                },
                {
                    fieldKey: 'equipmentTypeId',
                    fieldValue: ''
                },
                {
                    fieldKey: 'quantity',
                    fieldValue: ''
                },
            ]
        },
        "addEquipmentTypeList": {
            title: 'Create equipment type',
            fields: [
                {
                    fieldLabel: "Name",
                    fieldType: "text",
                    fieldName: "name",
                    isClass: false,
                    classDataUrl: '',
                },
            ],
            formBuilderGroupFields: [
                {
                    fieldKey: 'name',
                    fieldValue: ''
                },
            ]
        }
    }
]