
<script>
    // JavaScript code here
    function share() {
        alert('Sharing poll...');
    }

    let modalActive = false;

    function modalfun() {
        modalActive = true;
    }

    function closeModal() {
        modalActive = false;
    }
</script>

<style>
    /* CSS styles here */
    .outer-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .inner-container {
        width: 70%;
        border: 1px solid rgb(31, 41, 55);
        border-radius: 6px;
        background-color: rgb(31, 41, 55);
        padding: 24px;
        color: rgb(209, 213, 219);
        border-top-style: solid;
        border-top-width: 4px;
        border-top-color: rgb(56, 124, 228);
    }
    .title  {
        padding: 14px 16px;
    }
    .title h2 {
        color: #fff;
        font-size: 30px;
        font-weight: 300;
    }
    .title p {
        color: #fff;
        font-size: 15px;
        font-weight: 10px;
    }
    .results {
        padding: 14px 16px;
        color: #fff;
        font-size: 15px;
        font-weight: 10px;    
    }
    .bar {
        display: block;
    }
    .options {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .info {
        display: flex;
        justify-content: space-between;
        color: #fff;
        font-size: 15px;
        font-weight: 10px;
    }
    .bar .line {
        margin-bottom: 15px;
        position: relative;
        width: 80%;
        height: 20px;
        background: #fff;
        border-radius: 10px;
    }
    .bar .line:before {
        content: '';
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        background: pink;
        border-radius: 10px;
        width: 95%;
    }
    .button {
        display: flex;
        gap: 250px;
    }
    .btn {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 20px;
    }
    .live-result-btn {
        width: 120px;
        text-align: center;
        border-radius: 6px;
        color: white;
        padding: 8px;
        background-color: rgb(56, 124, 228);
        margin-top: 24px;
        font-size: 14px;
        font-weight: 500;
    }
    .btn2 {
        justify-content: right;
    }
    .modal {
        z-index: 999999;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .modal.active {
        visibility: visible;
        opacity: 1;
    }
    .modal-inner {
        width: 80%;
        max-width: 600px; /* Limit maximum width */
        border: 1px solid rgb(31, 41, 55);
        border-radius: 6px;
        background-color: rgb(31, 41, 55);
        padding: 24px;
        color: rgb(209, 213, 219);
        border-top-style: solid;
        border-top-width: 4px;
        border-top-color: rgb(56, 124, 228);
    }

	.button-container{
		display: flex;
		justify-content: space-between;
		gap: 8px;
	}

	.live-btn {
        width: auto;
        text-align: center;
        border-radius: 6px;
        color: white;
        padding: 8px;
        background-color: rgb(56, 124, 228);
        margin-top: 24px;
        font-size: 14px;
        font-weight: 500;
    }

    @media(max-width: 1250px) {
		.inner-container{
			width: 80%;
		}
        .button {
            display: flex;
            gap: 100px;
        }
		.bar .line{
			width: 90%;
		}
    }

    @media(max-width: 900px) {
		.inner-container{
			width: 90%;
		}
        .button {
            display: block;
            gap: 20px;
        }
        .live-result-btn {
            width: 100px;
        }
		.bar .line{
			width: 95%;
		}
    }
</style>

<div class="outer-container">
    <div class="inner-container">

        <div class="title">
            <h2>Title</h2>
            <!-- <p>by a guest</p> -->
        </div>

        <div class="results">
            <ul class="bar">
                <li class="options">
                    <div class="info">
                        <h1>Option 1</h1>
                        <h1>90% (1 votes)</h1>
                    </div>
                    <div class="line"></div>
                </li>

                <li class="options">
                    <div class="info">
                        <h1>Option 2</h1>
                        <h1>90% (1 votes)</h1>
                    </div>
                    <div class="line"></div>
                </li>

                <li class="options">
                    <div class="info">
                        <h1>Option 3</h1>
                        <h1>90% (1 votes)</h1>
                    </div>
                    <div class="line"></div>
                </li>
            </ul>
        </div>

		<div class="title">
            <p>Total votes: </p>    
        </div>

        <div class="button">
            <div class="btn">
                <button class="live-result-btn">Live Results</button>
                <button class="live-result-btn">Back to Poll</button>
            </div>
            <div class="btn2">
                <button class="live-result-btn" on:click={modalfun}>Share</button>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal" class:active={modalActive}>
            <div class="modal-inner">
                <h2>Share this poll</h2>
                <div class="button-container">
                    <button class="share-button live-btn" on:click={share}>Share on Facebook</button>
                    <button class="share-button live-btn" on:click={share}>Share on Twitter</button>
                    <button class="share-button live-btn" on:click={share}>Share via Email</button>
                </div>
                <button class="live-result-btn" on:click={closeModal}>Close</button>
            </div>
        </div>

    </div>
</div>
