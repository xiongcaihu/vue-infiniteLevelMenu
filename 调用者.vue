<template>
    <div class="test">
        <menus :list="list"></menus>
    </div>
</template>

<script>
    import menus from './menus/menus.vue';
    import mock from 'mockjs';

    let random = mock.Random;

    let list = (function () {
        let array = [];

        let level = random.integer(6, 6);

        array = makeArray(level);

        function makeArray(level) {
            if (level <= 0) {
                return [];
            } else {
                let count = random.integer(1, 8);
                let tempArray = [];
                for (let i = 0; i < count; i++) {
                    tempArray.push({
                        name: random.cname(),
                        child: makeArray(level - 1)
                    })
                }

                return tempArray;
            }
        }

        return array;
    })()

    console.dir(list);

    export default {
        components: {
            menus: menus
        },
        data() {
            return {
                list: list
            }
        }
    }

</script>

<style lang='less'>
    .test {}

</style>
