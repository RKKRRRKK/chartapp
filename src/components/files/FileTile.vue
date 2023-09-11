<template>
    <base-card mode="outline">
    <li>
        <h4>{{ name }}</h4>
        <h5>{{ '(' + date +')'  }}</h5>
        <div class="actions">
            <base-button mode="outline" link to="/saved">open</base-button>
            <base-button mode="outline" link to="/saved">edit</base-button>
            <base-button mode="outline" link :to="iframePath">i-frame</base-button>
            <base-button  link to="/saved">delete</base-button>
        </div>
    </li>
    </base-card>
</template>

<script>
export default {
    props: ['id', 'name', 'date'],
    computed: {
        iframePath() {
            return '/saved/' + this.id + '/frame'
        }

    }
}


</script>

<style scoped>
li {
    list-style-type: none;
    width: 100%;
}
h4 {
    text-align: left;
    margin: 0;
    font-size: 1rem;
}

h5 {
    margin-bottom: 1rem;
    margin-top: 0.1rem;
    font-size: 0.6rem;
    text-align: left;
}

.actions {
    font-size: 0.6rem;
}

div {
    text-align: right;
}
</style>