import React from 'react';

export default function FriendForm(){
    return(
        <div>
            <form>
                <label>
                    Name:
                    <input name='name' />
                </label>
                <label>
                    Age:
                    <input name='age' />
                </label>
                <label>
                    Email:
                    <input name='email' />
                </label>
            </form>
        </div>
    )
}