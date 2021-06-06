
function eventActivity(e){
    let activity = "";
    activity = e.target.dataset.activity;
    console.log(activity);
    return activity;
}

export {eventActivity}