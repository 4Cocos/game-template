"use strict";
Vue.component("listview",
    {
        template: `
            <ui-prop
                v-prop=target.content
                :multi-values=multi
            ></ui-prop>
            <ui-prop
                v-prop="target.listItem"
                :multi-values="multi"
            ></ui-prop>
            <ui-prop
                v-prop="target.layoutType"
                :multi-values="multi"
            ></ui-prop>
            <ui-prop
                v-prop="target.direction"
                :multi-values="multi"
            ></ui-prop>
            <div>
            <ui-prop
                v-if="target.horizontal.value"
                v-prop="target.paddingLeft"
                :multi-values="multi"
            ></ui-prop>
            <ui-prop
                v-if="target.horizontal.value"
                v-prop="target.paddingRight"
                :multi-values="multi"
            ></ui-prop>
            <ui-prop
                v-if="target.vertical.value"
                v-prop="target.paddingTop"
                :multi-values="multi"
            ></ui-prop>
            <ui-prop
                v-if="target.vertical.value"
                v-prop="target.paddingBottom"
                :multi-values="multi"
            ></ui-prop>
                <ui-prop
                    v-prop=target.inertia
                    :multi-values=multi
                ></ui-prop>
                <ui-prop
                    v-if=target.inertia.value
                    v-prop=target.brake
                    :multi-values=multi
                ></ui-prop>
                <ui-prop
                    v-prop=target.elastic
                    :multi-values=multi
                ></ui-prop>
                <ui-prop
                    v-if=target.elastic.value
                    v-prop=target.bounceDuration
                    :multi-values=multi
                ></ui-prop>
                <ui-prop
                    v-if=target.horizontal.value
                    v-prop=target.horizontalScrollBar
                    :multi-values=multi
                ></ui-prop>
                <ui-prop
                    v-if=target.vertical.value
                    v-prop=target.verticalScrollBar
                    :multi-values=multi
                ></ui-prop>
                <cc-array-prop :target.sync=target.scrollEvents></cc-array-prop>
                <ui-prop
                    v-prop=target.cancelInnerEvents
                    :multi-values=multi
                ></ui-prop>
            </div>
        `,
        props: {
            target: { twoWay: !0, type: Object },
            multi: { type: Boolean },
        },
    });