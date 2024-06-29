<script>
    export let message = "";
    export let close;
    export let showResults;
    export let share;
</script>

<style>
    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        text-align: center;
    }
    .modal-button {
        margin-top: 10px;
        padding: 10px 20px;
        background-color: grey;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .button-container {
        display: flex;
        gap: 10px;
        justify-content: center;
    }
</style>

<div class="modal">
    <div class="modal-content">
        <p>{message}</p>
        <div class="button-container">
            <button class="modal-button" on:click={showResults}>View Results</button>
            <button class="modal-button" on:click={share}>Share</button>
            <button class="modal-button" on:click={close}>Close</button>
        </div>
    </div>
</div>
