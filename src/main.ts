import { isUiAvailable, getStaff} from './helpers';

enum StaffType {
  Handyman = 0,
  Mechanic = 1,
  Security = 2,
  Entertainer = 3,
}

function fireStaff(id) {
  context.executeAction(
    'stafffire',
    {
      id,
    },
  );
}

let windowIsOpen = false;
let window: Window;

function showUi() {
  if (windowIsOpen) {
    window.bringToFront();
  } else {
    window = ui.openWindow({
      classification: 'Dallas Staff Manager',
      width: 220,
      height: 180,
      title: 'Dallas Staff Manager',
      widgets: [
        {
          type: 'button',
          name: 'FireAllStaff',
          text: 'Fire All Staff',
          x: 2,
          y: 160,
          width: 216,
          height: 15,
          onClick() {
            getStaff().forEach((staffMember) => {
              fireStaff(staffMember.id);
            });
          },
        },
        {
          type: 'button',
          name: 'DoubleMechanic',
          text: 'Double Mechanic',
          tooltip:
            'Double Mechanic',
          x: 2,
          y: 55,
          width: 106,
          height: 15,
          onClick() {
            const staff: Staff[] = getStaff();

            staff.forEach((staffMember) => {
            if (staffMember.staffType === 'mechanic')
            context.executeAction(
                'staffhire',
                {
                  autoPosition: true,
                  staffType: StaffType.Mechanic,
                  entertainerType: staffMember.costume,
                  staffOrders: staffMember.orders,
                },
              );
            });
          },
        },
        {
          type: 'button',
          name: 'DoubleEntertainer',
          text: 'Double Entertainer',
          tooltip:
            'Double Entertainer',
          x: 110,
          y: 55,
          width: 106,
          height: 15,
          onClick() {
            const staff: Staff[] = getStaff();
            staff.forEach((staffMember) => {
              if (staffMember.staffType === 'entertainer')
              context.executeAction(
                'staffhire',
                {
                  autoPosition: true,
                  staffType: StaffType.Entertainer,
                  entertainerType: staffMember.costume,
                  staffOrders: staffMember.orders,
                },
              );
              });
          },
        },
        {
          type: 'button',
          name: 'DoubleSecurity',
          text: 'Double Security',
          tooltip:
            'Double Security does not make the park safer.',
          x: 110,
          y: 72,
          width: 106,
          height: 15,
          onClick() {
            const staff: Staff[] = getStaff();

            staff.forEach((staffMember) => {
              if (staffMember.staffType === 'security')
            context.executeAction(
                'staffhire',
                {
                  autoPosition: true,
                  staffType: StaffType.Security,
                  entertainerType: staffMember.costume,
                  staffOrders: staffMember.orders,
                },
              );
            });
          },
        },
        {
          type: 'button',
          name: 'DoubleHandyman',
          text: 'Double Handyman',
          tooltip:
            'Double Handyman',
          x: 2,
          y: 72,
          width: 106,
          height: 15,
          onClick() {
            const staff: Staff[] = getStaff();
            staff.forEach((staffMember) => {
            if (staffMember.staffType === 'handyman')  
            context.executeAction(
                'staffhire',
                {
                  autoPosition: true,
                  staffType: StaffType.Handyman,
                  entertainerType: staffMember.costume,
                  staffOrders: staffMember.orders,
                },
              );
            });
          },
        },
        {
          type: 'button',
          name: 'FireMechanics',
          text: 'Fire Mechanics',
          tooltip:
            'Fire all Mechanics... Good luck fixing rides',
          x: 2,
          y: 89,
          width: 106,
          height: 15,
          onClick() {
            const staff: Staff[] = getStaff();
      
            staff.forEach((staffMember) => {
            if (staffMember.staffType === 'mechanic')
            fireStaff(staffMember.id);
            },
              );
            },
        },
        {   
          type: 'button',
          name: 'FireSecurity',
          text: 'Fire Security',
          tooltip:
            'Fire all Security Guards... Why hire them in the first place. Just make a better park.',
          x: 110,
          y: 89,
          width: 106,
          height: 15,
          onClick() {
            const staff: Staff[] = getStaff();
      
            staff.forEach((staffMember) => {
            if (staffMember.staffType === 'security')
            fireStaff(staffMember.id);
            },
              );
            },
        },
        {   
          type: 'button',
          name: 'FireHandyman',
          text: 'Fire Handyman',
          tooltip:
            'Fire all Handymen... Nice Job now your park will be littered and smelly.',
          x: 110,
          y: 106,
          width: 106,
          height: 15,
          onClick() {
            const staff: Staff[] = getStaff();
            staff.forEach((staffMember) => {
            if (staffMember.staffType === 'handyman')
            fireStaff(staffMember.id);
            },
              );
            },
        },
        {   
          type: 'button',
          name: 'FireEntertainers',
          text: 'Fire Entertainers',
          tooltip:
            'Fire all Entertainers... Good Job park is extremely boring now',
          x: 2,
          y: 106,
          width: 106,
          height: 15,
          onClick() {
            const staff: Staff[] = getStaff();
            staff.forEach((staffMember) => {
            if (staffMember.staffType === 'entertainer')
            fireStaff(staffMember.id);
            },
              );
            },
        },
        ],
      onClose() {
        windowIsOpen = false;
      },
    });
    windowIsOpen = true;
  }
}

const main = (): void => {
  if (isUiAvailable) {
    ui.registerMenuItem('Dallas Staff Manager', () => {
      showUi();
    });
  }
}
export default main;
