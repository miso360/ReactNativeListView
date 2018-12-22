import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadItems } from '../actions/ItemAction';
import ItemList from '../components/ItemList';

const mapStateToProps = state => ({
    item: state.item
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        loadItems
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);