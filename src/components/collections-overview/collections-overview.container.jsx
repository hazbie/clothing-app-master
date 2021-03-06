import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors';
import WithSpinner from '../WithSpinner/with-spinner';
import CollectionsOverview from './collections-overview';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;