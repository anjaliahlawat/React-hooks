import React from 'react';
import {UserContext, ChannelContext} from '../App'

function ComponentF(props) {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return(
                                        <div>
                                            {user}  {channel}
                                        </div>)
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    );
}

export default ComponentF;