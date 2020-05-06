<template>
    <div id="modal">
        <card>
            <div class="modal-head">
                <h2>{{title}}</h2>
                <span class="exit" @click="$store.commit('toggleModal')">&#10006;</span>
            </div>
            <div class="modal-body">
                <slot></slot>
            </div>
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
        z-index: 90;
        top: 10rem;
        left: 15rem;
        right: 15rem;
        display: flex;
        .modal-head {
            display: flex;
            justify-content: space-between;
        }
        .modal-body {
            min-height: 3rem;
        }
        .exit {
            position: relative;
            height: 1rem;
            transform: scale(2);
            top: .5rem;
            right: .5rem;
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
