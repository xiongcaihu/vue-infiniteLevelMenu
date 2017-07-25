import _ from 'lodash';

export default {
    name: 'menus',
    props: {
        startX: {// 起始坐标x
            type: [String],
            required: false,
            default: '0'
        },
        startY: {// 起始坐标y
            type: [String],
            required: false,
            default: '0'
        },
        list: {// 数据
            type: [Array],
            required: true,
            default: function () {
                return []
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        showChild(item) {
            if (_.isEmpty(item.child)) {
                this.myItemClickEvent(item);
                return;
            }
            for (let i = 0; i < this.list.length; i++) {
                let tempChild = this.list[i];
                if (item != tempChild && tempChild.showChild == true) {
                    this.$set(tempChild, 'showChild', false);
                }
            }
            this.$set(item, 'showChild', !item.showChild);
            this.lastShowChildItem = item;
        },
        myItemClickEvent(item) {
            alert(item.name);
        }
    }
}
