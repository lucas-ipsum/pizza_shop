<template>
    <div
        data-te-chip-init
                data-te-ripple-init
                class=" my-[5px] mr-4 w-fit h-[32px] items-center justify-between rounded-[16px] px-[12px] py-0 text-[13px]  leading-loose text-[#4f4f4f] duration-300 bg-[#eceff1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true">
                    {{ text }}
    </div>
</template>

<script>
    export default {
        name: 'Chip',
        props: {
            text: String
        }, 
    }
</script>