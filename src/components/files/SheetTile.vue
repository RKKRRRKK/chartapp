<template>
    <base-card mode="card">
    <li>
        <h4>{{ name }}</h4>
        <div class="actions">
            <small-button mode="outline" link to="/saved">save</small-button>
            <small-button mode="outline" link to="/saved">^</small-button>
            <small-button class="delete"  link to="/saved">X</small-button>
        </div>
    </li>
    </base-card>
</template>

<script>
export default {
    props: ['name']
}


</script>

<style scoped>

li {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
h4 {
    text-align: center;
    margin: 0;
    padding-bottom: 0.5rem;
    font-size: 0.8rem;
;
}
.actions {
    font-size: 0.6rem;
    display: flex;
    justify-content: space-between;
}
</style>