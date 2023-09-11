<template>
    <div class="card">
        <slot></slot>
    </div>
</template>


<style scoped>
.card {
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.26);
    padding: 1rem;
    max-width: 40rem;
    margin-bottom: 2rem;
    background-color: rgb(237, 108, 61);
    cursor: pointer;
}

.card:hover {
    background-color: rgb(239, 136, 98);
}

</style>