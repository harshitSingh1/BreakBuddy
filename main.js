// search-bar
$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      var searchQuery = $('input[type="text"]').val().toLowerCase();
      $('.box').each(function() {
        var boxText = $(this).text().toLowerCase();
        if (boxText.indexOf(searchQuery) !== -1) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
  
   // Shortcut data
    var shortcuts = [];
    
    // Get the shortcut container element
    var shortcutContainer = document.getElementById("shortcutContainer");
    
    // Render shortcuts
    function renderShortcuts() {
      // Clear existing shortcuts
      shortcutContainer.innerHTML = "";
      
      // Loop through shortcuts and create elements
      shortcuts.forEach(function(shortcut) {
        var shortcutElement = document.createElement("div");
        shortcutElement.className = "shortcut";
        
        // Create logo image
        var logoImg = document.createElement("img");
        logoImg.src = "https://www.google.com/s2/favicons?domain=" + shortcut.url;
        
        // Create site icon container
        var siteIconContainer = document.createElement("div");
        siteIconContainer.className = "site-icon-container";
        siteIconContainer.appendChild(logoImg);
        
        // Append site icon container to shortcut element
        shortcutElement.appendChild(siteIconContainer);
        
        // Create site name
        var nameElement = document.createElement("div");
        nameElement.className = "name";
        var displayName = shortcut.name.length > 8 ? shortcut.name.slice(0, 8) + "..." : shortcut.name;
        nameElement.textContent = displayName;
        shortcutElement.appendChild(nameElement);
        
        // Add click event to open site
        shortcutElement.addEventListener("click", function() {
          window.open(shortcut.url, "_blank");
        });
        
        // Create options
        var optionsElement = document.createElement("div");
        optionsElement.className = "options";
        
        // Create three-dot icon
        var optionsIcon = document.createElement("i");
        optionsIcon.className = "fas fa-ellipsis-v options-icon";
        optionsIcon.addEventListener("click", function(event) {
          event.stopPropagation();
          optionsElement.style.display = "block";
        });
        shortcutElement.appendChild(optionsIcon);
        
        // Create rename button
        var renameBtn = document.createElement("button");
        renameBtn.textContent = "Rename";
        renameBtn.addEventListener("click", function(event) {
          event.stopPropagation();
          var newName = prompt("Enter new name", shortcut.name);
          if (newName) {
            shortcut.name = newName;
            renderShortcuts();
            saveShortcuts();
          }
        });
        optionsElement.appendChild(renameBtn);
        
        // Create delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function(event) {
          event.stopPropagation();
          var index = shortcuts.indexOf(shortcut);
          if (index > -1) {
            shortcuts.splice(index, 1);
            renderShortcuts();
            saveShortcuts();
          }
        });
        optionsElement.appendChild(deleteBtn);
        
        // Add options to the shortcut element
        shortcutElement.appendChild(optionsElement);
        
        // Add the shortcut element to the container
        shortcutContainer.appendChild(shortcutElement);
      });
    }
    
    // Add shortcut button click event
    var addShortcutBtn = document.getElementById("addShortcutBtn");
    addShortcutBtn.addEventListener("click", function() {
      document.getElementById("modal").style.display = "block";
    });
    
    // Save shortcut button click event
    var saveShortcutBtn = document.getElementById("saveShortcutBtn");
    saveShortcutBtn.addEventListener("click", function() {
      var nameInput = document.getElementById("nameInput");
      var urlInput = document.getElementById("urlInput");
      
      var name = nameInput.value;
      var url = urlInput.value;
      
      if (name && url) {
        var shortcut = {
          name: name,
          url: url
        };
        
        shortcuts.push(shortcut);
        
        renderShortcuts();
        saveShortcuts();
        
        nameInput.value = "";
        urlInput.value = "";
        
        document.getElementById("modal").style.display = "none";
      }
    });
    
    // Close modal button click event
    var closeButton = document.getElementsByClassName("close")[0];
    closeButton.addEventListener("click", function() {
      document.getElementById("modal").style.display = "none";
    });
    
    // Save shortcuts to local storage
    function saveShortcuts() {
      localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
    }
    
    // Load shortcuts from local storage
    function loadShortcuts() {
      var storedShortcuts = localStorage.getItem("shortcuts");
      if (storedShortcuts) {
        shortcuts = JSON.parse(storedShortcuts);
        renderShortcuts();
      }
    }
    
    // Load shortcuts on page load
    loadShortcuts();

const collapseButton = document.querySelector('.collapse-button');
const sidebar = document.querySelector('.sidebar');
collapseButton.addEventListener('click', function() {
  sidebar.classList.toggle('collapsed');
});

// a function for share links
function shareLink() {
  var url = "https://harshitsingh1.github.io/BreakBuddy/";
  var title = "Check out this amazing platform!";
  var description = "Join the conversation at OpenAI Chat.";

  if (navigator.share) {
    navigator.share({
      title: title,
      text: description,
      url: url
    })
    .then(() => console.log('Successfully shared'))
    .catch((error) => console.log('Error sharing:', error));
  } else {
    alert("Sharing is not supported in your browser.");
  }
}
// set reminder
function setReminder() {
  var timeRange = prompt("Set reminder so that you don't miss your work. \nEnter reminder time (in minutes):");
  var minutes = parseInt(timeRange);

  if (!isNaN(minutes)) {
    var milliseconds = minutes * 60 * 1000;

    setTimeout(function() {
      var message = minutes + " minutes are over!";
      alert(message);
    }, milliseconds);
  }
}
function toggleIcons() {
  var iconsDiv = document.getElementById("socialMediaIcons");
  iconsDiv.classList.toggle("hidden");
}
 setTimeout(function() {
  document.querySelector('.progress').style.width = '10%';
}, 1000);

//hide the progress div when sidebar collapsed
  const rankProgress = document.querySelector('.rank-progress');
  collapseButton.addEventListener('click', function() {
    rankProgress.classList.toggle('hidden');
  });
