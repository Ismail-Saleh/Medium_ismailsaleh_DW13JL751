import {connect} from 'react-redux'
import Category from '../components/navbar/navbarfix'
import {category} from '../redux/actions/category'


const mapStateToProps = (state)=>({
        data  : state
    });
const mapDispatchToProps = (dispatch) =>({
    category : ()=>{
        dispatch(category())
    }
})


export default connect(
mapStateToProps,
mapDispatchToProps
)(Category)