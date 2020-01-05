import SideBar        from '~/screen/sidebar/index';
import { connect }    from 'react-redux';
import { getNavigation } from '~/store/actions/navigation';


const mapStateToProps = state => {
    return {
        menu: state.navigation
    }
};


const mapDispatchToProps = {
    getNavigation
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);