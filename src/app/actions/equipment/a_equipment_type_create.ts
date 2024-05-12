import { ViewService } from "src/app/shared/services/viewService/view.service";
import { WizardService } from "src/app/shared/services/wizardService/wizard.service";
import { ApiService } from "src/app/shared/services/apiService/api.service";
import { switchMap, filter, tap, defaultIfEmpty } from "rxjs";

export function a_equipment_type_create(vs: ViewService, apis: ApiService, ws: WizardService) {
  return ws.create('addEquipmentTypeList').pipe(
    switchMap(() => ws.destroy()),
    filter(wizardDestroyed => wizardDestroyed.save),
    switchMap(wizardDestroyed => {
      return apis.saveWizard(
        'http://localhost:5001/api/v1/Equipment/Types',
        wizardDestroyed.savedFields,
        {}
      );
    }),
    tap(() => {
      vs.refresh();
    }),
    defaultIfEmpty(null)
  );
}