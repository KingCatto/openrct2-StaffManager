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
      classification: 'Staff Manager',
      width: 220,
      height: 117,
      title: 'Staff Manager',
      widgets: [
        {
          type: 'button',
          name: 'FireAllStaff',
          text: 'Fire All Staff',
          x: 112,
          y: 88,
          width: 106,
          height: 25,
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
          y: 37,
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
          x: 2,
          y: 71,
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
          x: 2,
          y: 54,
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
          y: 20,
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
          x: 112,
          y: 37,
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
          x: 112,
          y: 54,
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
          x: 112,
          y: 20,
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
          x: 112,
          y: 71,
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
        {   
          type: 'button',
          name: 'Double All Staff',
          text: 'Double All Staff',
          tooltip:
            'Double all the staff.',
            x: 2,
            y: 88,
            width: 106,
            height: 25,
          onClick() {
            const staff: Staff[] = getStaff();

            staff.forEach((staffMember) => {
              let typ = 0;
              if (staffMember.staffType === 'handyman') {
                typ = StaffType.Handyman;
              } else if (staffMember.staffType === 'mechanic') {
                typ = StaffType.Mechanic;
              } else if (staffMember.staffType === 'entertainer') {
                typ = StaffType.Entertainer;
              } else if (staffMember.staffType === 'security') {
                typ = StaffType.Security;
              }
              context.executeAction(
                'staffhire',
                {
                  autoPosition: true,
                  staffType: typ,
                  entertainerType: staffMember.costume,
                  staffOrders: staffMember.orders,
                },
          },
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

