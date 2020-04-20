<template>
    <div id="modal">
        <card>
            <div class="modal-head">
                <h2>{{title}}</h2>
                <span class="exit" @click="$store.commit('toggleModal')">&#10006;</span>
            </div>
            <slot></slot>
        </card>
    </div>
</template>

<script>
    import Card from './Card'

    export default {
        name: "BaseModal",
        components: {
            Card
        },
        props: {
            form: {
                default: ''
            },
            title: {
                default: '{title}'
            }
        }
    }
</script>

<style lang="scss">
    #modal {
        position: absolute;
        z-index: 100;
        top: 10rem;
        left: 15rem;
        right: 15rem;
        display: flex;
        .modal-head {
            display: flex;
            justify-content: space-between;
            margin: 0 1rem;
        }
        .exit {
            position: relative;
            height: 1rem;
            transform: scale(2);
            top: .75rem;
            color: rgb(64, 100, 115);
        }
        .exit:hover {
            cursor: pointer;
            color: #02c39a;
        }
    }
    form {
        margin: auto
    }
</style>