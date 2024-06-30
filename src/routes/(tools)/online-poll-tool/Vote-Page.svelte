<script>
    import Modal from './Modal.svelte';
  
    let hasVoted = false;
    let selectedOption = '';
    let message = '';
    let showModal = false;
  
    function handleVote() {
        if (hasVoted) {
            message = 'You have already voted';
        } else {
            if (selectedOption) {
                hasVoted = true;
                message = 'Vote successful. Thank you for participating in this poll. Your vote has been counted.';
                showModal = true;
            } else {
                alert('Please select an option before voting.');
            }
        }
    }
  
    function handleOptionChange(option) {
        if (!hasVoted) {
            selectedOption = option;
        }
    }
  
    function closeModal() {
        showModal = false;
    }
  
    function showResults() {
        alert('Showing results...');
    }
  
    function share(platform) {
        alert(`Sharing poll on ${platform}...`);
    }
  </script>
  
  <div class="outer">
    <div class="inner">
        <h2>Question</h2>
        <div class="choose">
            <div class="options">
                <input type="radio" name="answer" id="a" on:change={() => handleOptionChange('a')} />
                <label for="a">Quiz option 1</label>
            </div>
            <div class="options">
                <input type="radio" name="answer" id="b" on:change={() => handleOptionChange('b')} />
                <label for="b">Quiz option 2</label>
            </div>
            <div class="options">
                <input type="radio" name="answer" id="c" on:change={() => handleOptionChange('c')} />
                <label for="c">Quiz option 3</label>
            </div>
            <div class="options">
                <input type="radio" name="answer" id="d" on:change={() => handleOptionChange('d')} />
                <label for="d">Quiz option 4</label>
            </div>
        </div>
        <div class="already-voted {message && message !== 'Vote successful. Thank you for participating in this poll. Your vote has been counted.' ? 'show' : ''}">{message && message !== 'Vote successful. Thank you for participating in this poll. Your vote has been counted.' ? message : ''}</div>
        <div class="button-container">
            <button class="vote-button" on:click={handleVote}>Vote</button>
            <button class="results-button" on:click={showResults}>Show Results</button>
        </div>
    </div>
  </div>
  
  <div class="outer">
    <div class="inner">
        <h2>Share this poll</h2>
        <div class="button-container">
            <a href="#" class="share-icon" on:click={() => share('Facebook')}>
                <img src="src/images/facebook-icon.png" alt="Share on Facebook">
            </a>
            <a href="#" class="share-icon" on:click={() => share('Twitter')}>
                <img src="src/images/twitter-icon.png" alt="Share on Twitter">
            </a>
            <a href="#" class="share-icon" on:click={() => share('Email')}>
                <img src="src/images/email-icon.png" alt="Share via Email">
            </a>
            <span class="share-text">Share this link: <a href="#">https://example.com/poll</a></span>
        </div>
    </div>
  </div>
  
  {#if showModal}
    <Modal message={message} close={closeModal} showResults={showResults} share={share} />
  {/if}
  
  <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .outer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    .inner {
        width: 60%;
        border: 1px solid rgb(31, 41, 55);
        border-radius: 6px;
        background-color: rgb(31, 41, 55);
        padding: 24px;
        color: rgb(209, 213, 219);
        border-top-style: solid;
        border-top-width: 4px;
        border-top-color: rgb(56, 124, 228);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .choose {
        margin-top: 24px;
        width: 100%;
    }
    .options {
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        align-items: center;
    }
    .options input {
        margin-right: 10px;
    }
    .options label {
        font-size: 14px;
        font-weight: 500;
    }
    .button-container {
        display: flex;
        gap: 10px;
        margin-top: 24px;
    }
    .vote-button, .results-button {
        padding: 8px 16px;
        border-radius: 6px;
        background-color: rgb(56, 124, 228);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
    }
    .share-icon {
        display: inline-block;
        width: 40px;
        height: 40px;
        background-color: rgb(56, 124, 228);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-right: 10px;
    }
    .share-icon img {
        width: 24px;
        height: 24px;
    }
    .share-text {
        font-size: 14px;
        color: rgb(209, 213, 219);
        margin-left: 10px;
    }
    .already-voted {
        margin-top: 15px;
        color: red;
        background-color: lightcoral;
        padding: 10px;
        border-radius: 5px;
        display: none;
    }
    .already-voted.show {
        display: block;
    }
  </style>
  