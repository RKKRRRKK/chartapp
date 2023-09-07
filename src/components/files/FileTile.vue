<template>
    <base-card>
    <li>
        <h4>{{ name }}</h4>
        <h5>{{ '(' + date +')'  }}</h5>
        <div class="actions">
            <base-button mode="outline" link to="/saved">open</base-button>
            <base-button mode="outline" link :to="iframePath">i-frame</base-button>
            <base-button mode="outline" link to="/saved">delete</base-button>
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
    width: 50vh;
}
h4 {
    text-align: left;
    margin: 0px;
    font-size: 20px;
}

h5 {
    margin-bottom: 20px;
    margin-top: 1px;
    font-size: 12px;
    text-align: left;
}

.actions {
    font-size: 10px;
}

div {
    text-align: right;
}
</style>