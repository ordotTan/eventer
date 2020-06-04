import React from 'react'
import UserPreview from './UserPreview'
import Moment from 'moment';

export function NotificationPreview(props) {
    let notificationTxt
    let notificationTopic
    switch (props.msg.type) {
        case 'update_event_details':
            notificationTxt = 'had updated '
            notificationTopic = 'event';
            break;
        case 'user_join_event':
            notificationTxt = 'had joined '
            notificationTopic = 'event';
            break;
        case 'user_left_event':
            notificationTxt = 'had left '
            notificationTopic = 'event';
            break;
        case 'new_event':
            notificationTxt = 'had created a new event'
            notificationTopic = 'event';
            break;
        case 'user_follow':
            notificationTxt = 'is following you now'
            notificationTopic = 'user';
            break;
        case 'user_unfollow':
            notificationTxt = 'had stopped following you'
            notificationTopic = 'user';
            break;
        case 'user_review':
            notificationTxt = 'had ranked you'
            notificationTopic = 'user';
            break;
        default:
            break;
    }

    //Extrcting all msg compoenetent from the props 
    const { _id, createdAt, user, event, isRead } = props.msg

    return (
        <section className={`notification-preview flex align-items-end ${isRead ? 'read' : ''}`}>

            {/* Notification sender section */}
            <div onClick={() => { props.notificationClicked('user preview', null, null, _id) }}>
                <UserPreview minimalUser={user} />
            </div>

            {/* Notification content section */}
            <div className="msg-body flex column align-items-end">
                <h4 onClick={() => {
                    props.notificationClicked(notificationTopic, user._id, event._id, _id)
                }}>
                    {user.fullName + ' '}
                    {notificationTxt}
                    {notificationTopic === 'event' ? event.title : ' '}
                </h4>

                <p>{Moment(createdAt).fromNow()} </p>
            </div>
        </section> 
    )
}