import React from 'react';
import { I18n, Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserName } from './HeaderAction';

import './style.scss';

import avatar from '../../../../images/userpic.png';

class Header extends React.Component {

  componentDidMount() {
    this.setState({
      userName: this.props.getUserName,
    });
  }

  render() {
    return (
      <header className='header'>
        <div className='header__content'>
          <div className='header__content-logo'/>
          <div className='userInfo'>
            <div className='userInfo__block'>
              <div className='userInfo__block-upper'>
                <span className='userInfo__name'>
                  {this.props.userName}
                </span>
              </div>
              <div className='userInfo__block-lower'>
                <a className='userInfo__signOut'>
                  {I18n.t('app.header.signOut')}
                </a>
              </div>
            </div>
            <div className='userInfo__avatar'>
              <img src={avatar} alt='user icon'/>
            </div>
          </div>
        </div>
        <div className='header__userbar'>
          <div className='header__userbar-info'>
          </div>
          <div className='header__userbar-buttons'>
          </div>
        </div>
      </header>
    );
  };
}

Header.defaultProps = {
  userName: 'Denis Nelubin',
};

const mapStateToProps = (state) => {
  return {
    userName: state.HeaderReducer.userName,
    waitingUserName: state.HeaderReducer.waitingUserName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUserName: bindActionCreators(getUserName, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);