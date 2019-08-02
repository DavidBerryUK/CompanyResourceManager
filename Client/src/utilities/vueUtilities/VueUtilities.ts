import Vue                                      from 'vue';

export default class VueUtilities {

    /**
     * Return the FIRST vue component instance that is in a named slot
     * @param vueInstance   The host vue instance that hosts the slot
     * @param slotName      The name of the slot to get the component from
     */
    public static getNamedSlotInstance(vueInstance: Vue, slotName: string): Vue | null {
        // tslint:disable-next-line: no-string-literal
        const editSlot = vueInstance.$scopedSlots[slotName];
        if (editSlot !== undefined) {
            const vnode = editSlot([]);
            if (vnode !== undefined) {
                const componentInstance = vnode[0].componentInstance;
                if ( componentInstance !== undefined) {
                    return componentInstance;
                }
            }
        }
        return null;
    }
}
