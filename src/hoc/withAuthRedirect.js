import { Navigate } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';


export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() { 
            if(!this.props.is_auth) return<Navigate to='/login' />
            return  <Component {...this.props} />
        }
    }

    let mapStateToPropsRedirect = (state) => {
        return {
          is_auth: state.auth.is_auth
        }
      }
      let ConnectedRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

    return ConnectedRedirectComponent
}