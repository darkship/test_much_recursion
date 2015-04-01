if (Meteor.isServer) {
    return;
}


function item_generator(n) {
    var baseItem = {number: 1}
    if (n<1) {
        return

    }
    else{
        var lastItem=baseItem
        for(var i=1;i<n;i++)
        {
            lastItem.item={number: i+1}
            lastItem=lastItem.item
        }
    }

    return baseItem;
}
Session.setDefault("recursions",3)
Template.body.events({
    'change input':function(evt,tpl)
    {
        Session.set("recursions",parseInt(evt.target.value))
    }
})
Template.body.helpers({
    recursions:function()
    {
        return Session.get("recursions")
    },
    item: function () {
        return item_generator(Session.get("recursions"))

    }
})
