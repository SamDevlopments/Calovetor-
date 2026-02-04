// chat-ui.js
class ChatUI {
    constructor() {
      this.chatSystem = tempersonsGlobe;
      this.emojiList = [
        '😀', '😂', '🥰', '😍', '🤩', '😘', '😊', '😇', '🙂', '😉',
        '😌', '🥺', '😋', '😎', '🤗', '😏', '😫', '🥱', '😴', '😪',
        '🤤', '😛', '😜', '🤪', '😝', '🤑', '🤭', '🤫', '🤔', '😬',
        '🤐', '🤨', '😐', '😑', '😶', '🙄', '😒', '😓', '😔', '😕',
        '🙃', '🫠', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧',
        '😨', '😩', '😰', '😱', '😳', '🤯', '😵', '🥴', '😠', '😡',
        '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥸',
        '😈', '👿', '💀', '☠️', '💩', '🤡', '👹', '👺', '👻', '👽',
        '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀',
        '😿', '😾', '💋', '👋', '🤚', '🖐️', '✋', '🖖', '👌', '🤏',
        '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇',
        '☝️', '👍', '👎', '✊', '👊', '🤛', '🤜', '👏', '🙌', '👐',
        '🤲', '🤝', '🙏', '✍️', '💅', '🤳', '💪', '🦾', '🦵', '🦿',
        '🦶', '👂', '🦻', '👃', '🧠', '🫀', '🫁', '🦷', '🦴', '👀',
        '👁️', '👅', '👄', '💋', '🩸', '💔', '❤️', '🧡', '💛', '💚',
        '💙', '💜', '🤎', '🖤', '🤍', '💯', '💢', '💥', '💫', '💦',
        '💨', '🕳️', '💣', '💬', '👁️‍🗨️', '🗨️', '🗯️', '💭', '💤',
        '🌸', '✨', '💕', '🌟', '🌺', '💖', '💫', '🌼', '🦋', '🍀',
        '🌷', '🌹', '🥀', '🌻', '🌞', '🌝', '🌛', '🌜', '🌚', '🌙',
        '⭐', '💫', '✨', '⚡', '🔥', '💧', '🌊', '☁️', '🌪️', '🌈'
      ];
    }
    
    showRegistration() {
      const overlay = document.createElement('div');
      overlay.className = 'chat-registration-overlay';
      overlay.innerHTML = `
        <div class="chat-registration-container">
          <div class="chat-registration-header">
            <h3>🌍 Welcome to Tempersons Globe</h3>
            <button class="chat-registration-close">&times;</button>
          </div>
          <div class="chat-registration-content">
            <div class="chat-registration-illustration">
              <div class="chat-cloud-animation">
                <div class="cloud cloud1">☁️</div>
                <div class="cloud cloud2">☁️</div>
                <div class="chat-globe">🌍</div>
                <div class="chat-hearts">
                  <span>💕</span>
                  <span>💖</span>
                  <span>✨</span>
                </div>
              </div>
            </div>
            <div class="chat-registration-form">
              <p class="chat-welcome-text">Join our cute community! Register with a name to start chatting with other Pookie friends ✨</p>
              
              <div class="form-group">
                <label for="chat-username">
                  <span class="label-emoji">👤</span> Your Cute Name
                </label>
                <input type="text" id="chat-username" 
                       placeholder="Enter your adorable name..." 
                       maxlength="20"
                       class="chat-input">
                <div class="char-count">0/20</div>
              </div>
              
              <div class="form-group">
                <label for="chat-userinfo">
                  <span class="label-emoji">💭</span> About You (Optional)
                </label>
                <textarea id="chat-userinfo" 
                          placeholder="Tell us something cute about yourself... ✨" 
                          rows="3"
                          class="chat-textarea"></textarea>
              </div>
              
              <div class="form-group">
                <label for="chat-color">
                  <span class="label-emoji">🎨</span> Choose Your Color
                </label>
                <div class="color-picker">
                  ${this.generateColorOptions()}
                </div>
              </div>
              
              <button class="chat-register-btn" id="chat-register-btn">
                <span class="btn-emoji">🌸</span> Join Tempersons Globe
              </button>
              
              <p class="chat-terms">
                By joining, you agree to be kind and spread love! 💕<br>
                Messages can be edited within 30 minutes.
              </p>
            </div>
          </div>
        </div>
      `;
      
      document.body.appendChild(overlay);
      
      // Add event listeners
      const closeBtn = overlay.querySelector('.chat-registration-close');
      const registerBtn = overlay.querySelector('#chat-register-btn');
      const usernameInput = overlay.querySelector('#chat-username');
      const charCount = overlay.querySelector('.char-count');
      
      closeBtn.addEventListener('click', () => overlay.remove());
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
      });
      
      usernameInput.addEventListener('input', (e) => {
        charCount.textContent = `${e.target.value.length}/20`;
      });
      
      registerBtn.addEventListener('click', () => {
        this.handleRegistration(overlay);
      });
      
      // Enter key to register
      usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.handleRegistration(overlay);
        }
      });
      
      // Add animations
      setTimeout(() => {
        overlay.classList.add('active');
      }, 10);
    }
    
    generateColorOptions() {
      const colors = [
        {name: 'Pink', value: '#FFB6C1', emoji: '🌸'},
        {name: 'Gold', value: '#FFD700', emoji: '🌟'},
        {name: 'Mint', value: '#98FB98', emoji: '🌿'},
        {name: 'Sky', value: '#87CEEB', emoji: '☁️'},
        {name: 'Lavender', value: '#DDA0DD', emoji: '💜'},
        {name: 'Peach', value: '#FFDAB9', emoji: '🍑'},
        {name: 'Coral', value: '#FF7F50', emoji: '🐠'},
        {name: 'Seafoam', value: '#20B2AA', emoji: '🌊'}
      ];
      
      return colors.map(color => `
        <label class="color-option" style="--color: ${color.value}">
          <input type="radio" name="user-color" value="${color.value}">
          <span class="color-dot" style="background-color: ${color.value}"></span>
          <span class="color-emoji">${color.emoji}</span>
        </label>
      `).join('');
    }
    
    handleRegistration(overlay) {
      const username = overlay.querySelector('#chat-username').value.trim();
      const userinfo = overlay.querySelector('#chat-userinfo').value.trim();
      const colorInput = overlay.querySelector('input[name="user-color"]:checked');
      
      if (!username) {
        this.showNotification('Please enter a cute name! ✨', 'error');
        return;
      }
      
      if (username.length < 2) {
        this.showNotification('Name should be at least 2 characters! 💕', 'error');
        return;
      }
      
      const selectedColor = colorInput ? colorInput.value : null;
      
      // Register user
      const user = this.chatSystem.registerUser(username, userinfo);
      
      // Override color if selected
      if (selectedColor) {
        user.color = selectedColor;
        localStorage.setItem('tempersonsUser', JSON.stringify(user));
      }
      
      this.showNotification(`Welcome to Tempersons Globe, ${username}! 🌍✨`, 'success');
      
      // Close registration and open chat
      overlay.remove();
      this.showChatInterface();
    }
    
    showChatInterface() {
      // Remove any existing chat overlay
      const existing = document.querySelector('.chat-overlay');
      if (existing) existing.remove();
      
      const overlay = document.createElement('div');
      overlay.className = 'chat-overlay';
      overlay.innerHTML = `
        <div class="chat-container">
          <!-- Header -->
          <div class="chat-header">
            <div class="chat-header-left">
              <button class="chat-back-btn" id="chat-back-btn">
                <span class="back-emoji">←</span>
              </button>
              <div class="chat-title">
                <span class="title-emoji">🌍</span>
                <h3>Tempersons Globe</h3>
                <div class="online-indicator">
                  <span class="online-dot"></span>
                  <span class="online-count">1 online</span>
                </div>
              </div>
            </div>
            <div class="chat-header-right">
              <button class="chat-header-btn" id="chat-search-btn" title="Search">
                <span class="btn-emoji">🔍</span>
              </button>
              <button class="chat-header-btn" id="chat-users-btn" title="Online Users">
                <span class="btn-emoji">👥</span>
              </button>
              <button class="chat-header-btn" id="chat-settings-btn" title="Chat Settings">
                <span class="btn-emoji">⚙️</span>
              </button>
              <button class="chat-close-btn" id="chat-close-btn">
                <span class="close-emoji">×</span>
              </button>
            </div>
          </div>
          
          <!-- Chat Area -->
          <div class="chat-main">
            <!-- Sidebar (hidden by default on mobile) -->
            <div class="chat-sidebar" id="chat-sidebar">
              <div class="sidebar-header">
                <h4><span class="sidebar-emoji">📅</span> Chat History</h4>
                <button class="sidebar-close" id="sidebar-close">&times;</button>
              </div>
              <div class="sidebar-content">
                <div class="history-filters">
                  <button class="history-filter active" data-filter="today">Today</button>
                  <button class="history-filter" data-filter="week">This Week</button>
                  <button class="history-filter" data-filter="month">This Month</button>
                  <button class="history-filter" data-filter="all">All Time</button>
                </div>
                <div class="history-dates" id="history-dates">
                  <!-- Date groups will be populated here -->
                </div>
              </div>
            </div>
            
            <!-- Messages Container -->
            <div class="chat-messages-container">
              <!-- Typing Indicator -->
              <div class="typing-indicator" id="typing-indicator" style="display: none;">
                <div class="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span class="typing-text">Someone is typing...</span>
              </div>
              
              <!-- Messages -->
              <div class="chat-messages" id="chat-messages">
                <!-- Messages will be loaded here -->
                <div class="no-messages">
                  <div class="no-messages-emoji">✨</div>
                  <p>Start the conversation! Say hi to everyone! 💕</p>
                </div>
              </div>
              
              <!-- Message Input -->
              <div class="chat-input-container">
                <button class="emoji-btn" id="emoji-btn">
                  <span class="emoji-icon">😊</span>
                </button>
                
                <div class="message-input-wrapper">
                  <div class="message-input" 
                       contenteditable="true" 
                       id="message-input"
                       placeholder="Type a cute message... ✨"
                       data-emojiable="true"></div>
                  <div class="input-actions">
                    <button class="input-action-btn" id="attach-btn" title="Attach">
                      <span class="action-emoji">📎</span>
                    </button>
                    <button class="input-action-btn" id="gif-btn" title="GIF">
                      <span class="action-emoji">🎬</span>
                    </button>
                  </div>
                </div>
                
                <button class="send-btn" id="send-btn">
                  <span class="send-emoji">💕</span>
                </button>
              </div>
              
              <!-- Emoji Picker (hidden by default) -->
              <div class="emoji-picker" id="emoji-picker">
                <div class="emoji-picker-header">
                  <span class="emoji-category active" data-category="all">All</span>
                  <span class="emoji-category" data-category="smileys">😀</span>
                  <span class="emoji-category" data-category="hearts">💕</span>
                  <span class="emoji-category" data-category="nature">🌸</span>
                  <span class="emoji-category" data-category="objects">🎀</span>
                </div>
                <div class="emoji-grid" id="emoji-grid">
                  <!-- Emojis will be populated here -->
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      
      document.body.appendChild(overlay);
      
      // Initialize chat
      this.initializeChat(overlay);
      
      // Show with animation
      setTimeout(() => {
        overlay.classList.add('active');
      }, 10);
    }
    
    initializeChat(overlay) {
      // Load messages
      this.loadMessages();
      
      // Setup event listeners
      this.setupChatEventListeners(overlay);
      
      // Load emojis
      this.loadEmojis();
      
      // Update online count
      this.updateOnlineCount();
      
      // Setup typing detection
      this.setupTypingDetection();
      
      // Listen for new messages
      this.chatSystem.onNewMessage = (message) => {
        this.addMessageToUI(message, true);
        this.scrollToBottom();
      };
      
      // Listen for typing updates
      this.chatSystem.onTypingChange = (typingUsers) => {
        this.updateTypingIndicator(typingUsers);
      };
    }
    
    loadMessages() {
      const messagesContainer = document.getElementById('chat-messages');
      if (!messagesContainer) return;
      
      const messages = this.chatSystem.getChatHistory();
      
      if (messages.length === 0) {
        messagesContainer.innerHTML = `
          <div class="no-messages">
            <div class="no-messages-emoji">✨</div>
            <p>Start the conversation! Say hi to everyone! 💕</p>
          </div>
        `;
        return;
      }
      
      // Clear and add messages
      messagesContainer.innerHTML = '';
      messages.forEach(message => {
        this.addMessageToUI(message, false);
      });
      
      // Scroll to bottom
      setTimeout(() => this.scrollToBottom(), 100);
    }
    
    addMessageToUI(message, isNew = false) {
      const messagesContainer = document.getElementById('chat-messages');
      if (!messagesContainer) return;
      
      // Remove no-messages placeholder if exists
      const noMessages = messagesContainer.querySelector('.no-messages');
      if (noMessages) noMessages.remove();
      
      const messageElement = this.createMessageElement(message);
      
      if (isNew) {
        messageElement.classList.add('new-message');
        messagesContainer.prepend(messageElement);
        
        // Add animation
        setTimeout(() => {
          messageElement.classList.remove('new-message');
        }, 1000);
      } else {
        messagesContainer.appendChild(messageElement);
      }
    }
    
    createMessageElement(message) {
      const isCurrentUser = this.chatSystem.currentUser && 
                           message.userId === this.chatSystem.currentUser.id;
      const isSystem = message.isSystem;
      const isDeleted = message.deleted;
      
      let messageHTML = '';
      
      if (isSystem) {
        messageHTML = `
          <div class="message system-message" data-message-id="${message.id}">
            <div class="system-content">
              <span class="system-emoji">${message.userEmoji}</span>
              <span class="system-text">${message.message}</span>
            </div>
            <div class="message-time">${this.formatTime(message.timestamp)}</div>
          </div>
        `;
      } else if (isDeleted) {
        messageHTML = `
          <div class="message deleted-message" data-message-id="${message.id}">
            <div class="message-sender">
              <span class="sender-emoji">${message.userEmoji}</span>
              <span class="sender-name" style="color: ${message.userColor}">${message.userName}</span>
            </div>
            <div class="message-content">
              <span class="deleted-text">🚫 Message deleted</span>
            </div>
            <div class="message-time">${this.formatTime(message.timestamp)}</div>
          </div>
        `;
      } else {
        // Check for mentions
        let messageText = this.parseMessageText(message.message);
        
        messageHTML = `
          <div class="message ${isCurrentUser ? 'own-message' : 'other-message'}" 
               data-message-id="${message.id}"
               data-user-id="${message.userId}">
            <div class="message-sender">
              <span class="sender-emoji">${message.userEmoji}</span>
              <span class="sender-name" style="color: ${message.userColor}">${message.userName}</span>
              ${isCurrentUser ? '<span class="you-badge">You</span>' : ''}
            </div>
            <div class="message-content">
              <div class="message-text">${messageText}</div>
              ${message.edited ? '<span class="edited-badge">edited</span>' : ''}
              
              ${message.reactions && Object.keys(message.reactions).length > 0 ? `
                <div class="message-reactions">
                  ${Object.entries(message.reactions).map(([emoji, users]) => `
                    <span class="reaction ${users.includes(this.chatSystem.currentUser?.id) ? 'reacted' : ''}" 
                          data-emoji="${emoji}">
                      ${emoji} <span class="reaction-count">${users.length}</span>
                    </span>
                  `).join('')}
                </div>
              ` : ''}
            </div>
            <div class="message-time">${this.formatTime(message.timestamp)}</div>
            
            ${isCurrentUser ? `
              <div class="message-actions">
                <button class="message-action edit-btn" title="Edit (within 30min)">
                  <span class="action-emoji">✏️</span>
                </button>
                <button class="message-action delete-btn" title="Delete (within 30min)">
                  <span class="action-emoji">🗑️</span>
                </button>
              </div>
            ` : `
              <div class="message-actions">
                <button class="message-action react-btn" title="Add Reaction">
                  <span class="action-emoji">😊</span>
                </button>
                <button class="message-action reply-btn" title="Reply">
                  <span class="action-emoji">↩️</span>
                </button>
              </div>
            `}
          </div>
        `;
      }
      
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = messageHTML;
      return tempDiv.firstElementChild;
    }
    
    parseMessageText(text) {
      // Convert URLs to links
      text = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
      
      // Convert @mentions
      text = text.replace(/@(\w+)/g, '<span class="mention">@$1</span>');
      
      // Convert newlines to <br>
      text = text.replace(/\n/g, '<br>');
      
      return text;
    }
    
    formatTime(timestamp) {
      const date = new Date(timestamp);
      const now = new Date();
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);
      
      if (diffMins < 1) return 'Just now';
      if (diffMins < 60) return `${diffMins}m ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      if (diffDays === 1) return 'Yesterday';
      if (diffDays < 7) return `${diffDays}d ago`;
      
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: diffDays > 365 ? 'numeric' : undefined
      });
    }
    
    setupChatEventListeners(overlay) {
      // Back button
      const backBtn = overlay.querySelector('#chat-back-btn');
      backBtn.addEventListener('click', () => {
        overlay.remove();
      });
      
      // Close button
      const closeBtn = overlay.querySelector('#chat-close-btn');
      closeBtn.addEventListener('click', () => {
        overlay.remove();
      });
      
      // Send message
      const sendBtn = overlay.querySelector('#send-btn');
      const messageInput = overlay.querySelector('#message-input');
      
      sendBtn.addEventListener('click', () => this.sendMessage());
      
      messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.sendMessage();
        }
      });
      
      // Emoji picker
      const emojiBtn = overlay.querySelector('#emoji-btn');
      const emojiPicker = overlay.querySelector('#emoji-picker');
      
      emojiBtn.addEventListener('click', () => {
        emojiPicker.classList.toggle('visible');
      });
      
      // Close emoji picker when clicking outside
      document.addEventListener('click', (e) => {
        if (!emojiPicker.contains(e.target) && !emojiBtn.contains(e.target)) {
          emojiPicker.classList.remove('visible');
        }
      });
      
      // Search button
      const searchBtn = overlay.querySelector('#chat-search-btn');
      searchBtn.addEventListener('click', () => {
        this.showSearchOverlay();
      });
      
      // Users button
      const usersBtn = overlay.querySelector('#chat-users-btn');
      usersBtn.addEventListener('click', () => {
        this.showUsersOverlay();
      });
      
      // Settings button
      const settingsBtn = overlay.querySelector('#chat-settings-btn');
      settingsBtn.addEventListener('click', () => {
        this.showChatSettings();
      });
      
      // History sidebar toggle
      const sidebar = overlay.querySelector('#chat-sidebar');
      const sidebarClose = overlay.querySelector('#sidebar-close');
      
      // Toggle sidebar on small screens
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          sidebar.classList.add('visible');
        }
      });
      
      sidebarClose.addEventListener('click', () => {
        sidebar.classList.remove('visible');
      });
      
      // Load history filters
      this.loadHistoryFilters();
    }
    
    sendMessage() {
      const messageInput = document.querySelector('#message-input');
      const message = messageInput.innerText.trim();
      
      if (!message) return;
      
      // Send message
      const sentMessage = this.chatSystem.sendMessage(message);
      
      if (sentMessage) {
        // Clear input
        messageInput.innerHTML = '';
        
        // Stop typing indicator
        this.chatSystem.setTyping(false);
      }
    }
    
    setupTypingDetection() {
      const messageInput = document.querySelector('#message-input');
      let typingTimeout;
      
      messageInput.addEventListener('input', () => {
        this.chatSystem.setTyping(true);
        
        // Clear existing timeout
        clearTimeout(typingTimeout);
        
        // Set timeout to stop typing indicator after 2 seconds
        typingTimeout = setTimeout(() => {
          this.chatSystem.setTyping(false);
        }, 2000);
      });
    }
    
    updateTypingIndicator(typingUsers) {
      const indicator = document.getElementById('typing-indicator');
      
      if (typingUsers.length > 0) {
        // Get usernames of typing users
        const typingNames = typingUsers.map(userId => {
          const user = this.chatSystem.users[userId];
          return user ? user.name : 'Someone';
        });
        
        const text = typingNames.length === 1 
          ? `${typingNames[0]} is typing...`
          : `${typingNames.length} people are typing...`;
        
        indicator.querySelector('.typing-text').textContent = text;
        indicator.style.display = 'flex';
      } else {
        indicator.style.display = 'none';
      }
    }
    
    loadEmojis() {
      const emojiGrid = document.getElementById('emoji-grid');
      if (!emojiGrid) return;
      
      // Group emojis by category
      const categories = {
        smileys: this.emojiList.slice(0, 40),
        hearts: ['💕', '💖', '💗', '💓', '💞', '💝', '💘', '💟', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍'],
        nature: ['🌸', '🌺', '🌼', '🌷', '🌹', '🥀', '🌻', '🌞', '🌝', '🌛', '🌜', '🌚', '🌙', '⭐', '🌟', '✨', '⚡', '🔥', '💧', '🌊', '☁️', '🌈', '🌪️'],
        objects: ['🎀', '🎁', '🎈', '🎉', '🎊', '🎂', '🍰', '🧁', '🍬', '🍭', '🍫', '🍩', '🍪', '☕', '🍵', '🥤', '🍷', '🍸', '🍹', '🍺'],
        animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🐈', '🐓', '🦃', '🦚', '🦜', '🦢', '🦩', '🕊️', '🐇', '🐁', '🐀', '🐿️', '🦔', '🦨', '🦡', '🦦', '🦥', '🐾']
      };
      
      // Flatten all emojis for "all" category
      const allEmojis = [...categories.smileys, ...categories.hearts, ...categories.nature, ...categories.objects, ...categories.animals];
      
      // Remove duplicates
      const uniqueEmojis = [...new Set(allEmojis)];
      
      // Populate emoji grid
      emojiGrid.innerHTML = uniqueEmojis.map(emoji => `
        <span class="emoji-item" data-emoji="${emoji}">${emoji}</span>
      `).join('');
      
      // Add click event to emojis
      emojiGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('emoji-item')) {
          const emoji = e.target.dataset.emoji;
          this.insertEmoji(emoji);
        }
      });
      
      // Category filtering
      const categoryTabs = document.querySelectorAll('.emoji-category');
      categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const category = tab.dataset.category;
          
          // Update active tab
          categoryTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          
          // Filter emojis
          let filteredEmojis = [];
          if (category === 'all') {
            filteredEmojis = uniqueEmojis;
          } else if (categories[category]) {
            filteredEmojis = categories[category];
          }
          
          emojiGrid.innerHTML = filteredEmojis.map(emoji => `
            <span class="emoji-item" data-emoji="${emoji}">${emoji}</span>
          `).join('');
        });
      });
    }
    
    insertEmoji(emoji) {
      const messageInput = document.querySelector('#message-input');
      if (!messageInput) return;
      
      // Insert emoji at cursor position
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        const textNode = document.createTextNode(emoji);
        range.insertNode(textNode);
        range.setStartAfter(textNode);
        range.setEndAfter(textNode);
        selection.removeAllRanges();
        selection.addRange(range);
      } else {
        // Just append if no selection
        messageInput.innerHTML += emoji;
      }
      
      // Focus back on input
      messageInput.focus();
    }
    
    loadHistoryFilters() {
      const filters = document.querySelectorAll('.history-filter');
      filters.forEach(filter => {
        filter.addEventListener('click', () => {
          // Update active filter
          filters.forEach(f => f.classList.remove('active'));
          filter.classList.add('active');
          
          // Load filtered history
          this.loadFilteredHistory(filter.dataset.filter);
        });
      });
      
      // Load initial history (today)
      this.loadFilteredHistory('today');
    }
    
    loadFilteredHistory(filter) {
      const datesContainer = document.getElementById('history-dates');
      if (!datesContainer) return;
      
      let groupedMessages;
      
      switch(filter) {
        case 'today':
          groupedMessages = this.getMessagesByDate('today');
          break;
        case 'week':
          groupedMessages = this.getMessagesByDate('week');
          break;
        case 'month':
          groupedMessages = this.getMessagesByDate('month');
          break;
        case 'all':
          groupedMessages = this.getMessagesByDate('all');
          break;
      }
      
      datesContainer.innerHTML = '';
      
      Object.keys(groupedMessages).forEach(date => {
        const dateSection = document.createElement('div');
        dateSection.className = 'history-date-section';
        
        const dateHeader = document.createElement('div');
        dateHeader.className = 'history-date-header';
        dateHeader.innerHTML = `
          <span class="date-emoji">📅</span>
          <span class="date-label">${date}</span>
          <span class="message-count">${groupedMessages[date].length} messages</span>
        `;
        
        const messagesList = document.createElement('div');
        messagesList.className = 'history-messages-list';
        
        // Show only first 5 messages, with "Show more" option
        const messagesToShow = groupedMessages[date].slice(0, 5);
        
        messagesToShow.forEach(message => {
          const messageItem = document.createElement('div');
          messageItem.className = 'history-message-item';
          messageItem.innerHTML = `
            <div class="history-message-sender">
              <span class="history-sender-emoji">${message.userEmoji}</span>
              <span class="history-sender-name">${message.userName}</span>
              <span class="history-message-time">${this.formatTime(message.timestamp)}</span>
            </div>
            <div class="history-message-preview">
              ${message.deleted ? '🚫 Message deleted' : message.message.substring(0, 50)}
              ${message.message.length > 50 ? '...' : ''}
            </div>
          `;
          
          // Click to scroll to message in chat
          messageItem.addEventListener('click', () => {
            this.scrollToMessage(message.id);
          });
          
          messagesList.appendChild(messageItem);
        });
        
        // Add "Show more" if there are more messages
        if (groupedMessages[date].length > 5) {
          const showMore = document.createElement('div');
          showMore.className = 'show-more-history';
          showMore.textContent = `Show ${groupedMessages[date].length - 5} more messages...`;
          showMore.addEventListener('click', () => {
            this.showFullDateHistory(date, groupedMessages[date]);
          });
          messagesList.appendChild(showMore);
        }
        
        dateSection.appendChild(dateHeader);
        dateSection.appendChild(messagesList);
        datesContainer.appendChild(dateSection);
      });
    }
    
    getMessagesByDate(period) {
      const allMessages = this.chatSystem.chatHistory;
      const grouped = {};
      
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const weekAgo = new Date(today);
      weekAgo.setDate(weekAgo.getDate() - 7);
      const monthAgo = new Date(today);
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      
      allMessages.forEach(message => {
        const messageDate = new Date(message.timestamp);
        let dateKey;
        
        if (period === 'today' && messageDate >= today) {
          dateKey = 'Today';
        } else if (period === 'week' && messageDate >= weekAgo) {
          const dayDiff = Math.floor((today - messageDate) / (1000 * 60 * 60 * 24));
          dateKey = dayDiff === 0 ? 'Today' : 
                   dayDiff === 1 ? 'Yesterday' : 
                   messageDate.toLocaleDateString('en-US', { weekday: 'long' });
        } else if (period === 'month' && messageDate >= monthAgo) {
          dateKey = messageDate.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
          });
        } else if (period === 'all') {
          dateKey = messageDate.toLocaleDateString('en-US', { 
            year: 'numeric',
            month: 'long'
          });
        }
        
        if (dateKey) {
          if (!grouped[dateKey]) {
            grouped[dateKey] = [];
          }
          grouped[dateKey].push(message);
        }
      });
      
      return grouped;
    }
    
    scrollToMessage(messageId) {
      const messageElement = document.querySelector(`[data-message-id="${messageId}"]`);
      if (messageElement) {
        messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Highlight message temporarily
        messageElement.classList.add('highlighted');
        setTimeout(() => {
          messageElement.classList.remove('highlighted');
        }, 2000);
      }
    }
    
    showSearchOverlay() {
      // Implementation for search overlay
      this.showNotification('Search feature coming soon! 🔍✨', 'info');
    }
    
    showUsersOverlay() {
      // Implementation for users overlay
      this.showNotification('Online users feature coming soon! 👥✨', 'info');
    }
    
    showChatSettings() {
      // Implementation for chat settings
      this.showNotification('Chat settings coming soon! ⚙️✨', 'info');
    }
    
    updateOnlineCount() {
      const onlineCountElement = document.querySelector('.online-count');
      if (onlineCountElement) {
        // In a real app, this would come from a server
        // For now, we'll simulate with 1-10 random online users
        const randomCount = Math.floor(Math.random() * 10) + 1;
        onlineCountElement.textContent = `${randomCount} online`;
      }
    }
    
    scrollToBottom() {
      const messagesContainer = document.getElementById('chat-messages');
      if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    }
    
    showNotification(message, type = 'info') {
      const notification = document.createElement('div');
      notification.className = `chat-notification ${type}`;
      notification.innerHTML = `
        <span class="notification-emoji">${type === 'error' ? '⚠️' : type === 'success' ? '✅' : '💕'}</span>
        <span class="notification-text">${message}</span>
      `;
      
      document.body.appendChild(notification);
      
      // Show with animation
      setTimeout(() => notification.classList.add('show'), 10);
      
      // Auto remove after 3 seconds
      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
      }, 3000);
    }
  }
  
  // Initialize Chat UI
  const chatUI = new ChatUI();