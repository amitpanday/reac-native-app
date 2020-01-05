// import Navigation   from '../../content/navigation';

export const NAVIGATION_PENDING   = "NAVIGATION_PENDING";
export const NAVIGATION_FULFILLED = "NAVIGATION_FULFILLED";
export const NAVIGATION_REJECTED  = "NAVIGATION_REJECTED";

const Navigation = [
    {
        name: "Home Screen",
        route: "Home",
      },
      {
        name: "Category",
        title: true
      },
      {
        name: "Profile Screen",
        route: "Profile",
        params: { id: 25 },
        sub: true
      }
];

export function getNavigation() {
    return dispatch => {
        dispatch ({
            type: NAVIGATION_FULFILLED,
            payload: Navigation // axios.get(`ticker/`).then(result => result.data).then(data => data.data)
        });
    }
}