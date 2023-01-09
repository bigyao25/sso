<template>
    <div id="g_id_onload"></div>
</template>
    
<script lang="ts">
import { defineComponent, PropType } from 'vue';

declare const google: {
    accounts: {
        id: {
            initialize: (options: {
                client_id: string;
                callback: (res: CredentialRes) => any;
            }) => any;
            renderButton: (
                el: HTMLElement,
                conf: Partial<GsiButtonConfigurationOptions>
            ) => any;
        };
    };
};

interface CredentialRes {
    clientId: string;
    credential: string;
    select_by: string;
}

// https://developers.google.com/identity/gsi/web/reference/js-reference#GsiButtonConfiguration
interface GsiButtonConfigurationOptions {
    type: string;
    theme: string;
    size: string;
    text: string;
    shape: string;
    logo_alignment: string;
    width: string;
    locale: string;
}

export interface GoogleLoginButtonProps {
    clientId: string;
    renderButtonOptions?: Partial<GsiButtonConfigurationOptions>;
    onCredentialResponse: (res: CredentialRes) => any;
}

export default defineComponent({
    name: 'GoogleLoginButton',
    props: {
        googleLoginButtonProps: {
            type: Object as PropType<GoogleLoginButtonProps>,
            default: () => ({}),
        },
    },
    setup(props) {
        onMounted(() => {
            console.log(google);
            if (!google) return;
            if (!!process) return;

            google.accounts.id.initialize({
                client_id: props.googleLoginButtonProps.clientId,
                callback: props.googleLoginButtonProps.onCredentialResponse,
            });

            const btn = document.getElementById('g_id_onload') as HTMLElement;
            google.accounts.id.renderButton(
                btn,
                {
                    type: 'profile',
                    ...props.googleLoginButtonProps.renderButtonOptions,
                }
            );
        });

        return {};
    },
});
</script>
    
<style lang="scss" scoped>

</style>
