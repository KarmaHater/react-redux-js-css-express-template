import React from 'react';
import { connect } from 'react-redux';
import { dummy } from './../store/actions';
import Test from './../components/test';

const HomePage = () => (
    <div>
        <Test title={'one'} subtitle={'onesub'} />
        <Test title={'two'} subtitle={'twosub'} />
        <Test title={'three'} subtitle={'threesub'} />
    </div>
);

const mapStateToProps = state => ({
    state
});

const mapDispatchToProps = {
    dummy
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
