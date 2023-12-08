<template>
    <div class="chat-window">
      <div v-if="error">{{ error }}</div>
      <div v-if="documents" class="messages" ref="messagesEndRef">
        <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
          <!-- Date and Time above the name and message -->
          <div class="message-header">
            <span class="created-at">{{ doc.createdAt}}</span>
          </div>
          <!-- Name and Message content -->
          <div class="message-content">
            <span class="name">{{ doc.name }}</span>
            <span class="message">{{ doc.message }}</span>
          </div>
        </div>
      </div>
    </div>
</template>
  

<script>import { computed, onUpdated, ref, nextTick } from 'vue';
import getCollection from '../composables/getCollection';
import { formatDistanceToNow } from 'date-fns';

export default {
    setup(){
        const { error, documents } = getCollection('messages');
        const messagesEndRef = ref(null); // Renamed for clarity

        const formattedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate());
                    return { ...doc, createdAt: time };
                });
            }
            return []; // Ensure this always returns an array
        });

        onUpdated(() => {
            nextTick(() => {
                if (messagesEndRef.value) {
                    messagesEndRef.value.scrollTop = messagesEndRef.value.scrollHeight;
                }
            });
        });

        return { error, documents, formattedDocuments, messagesEndRef };
    }
}

</script>
<style>
  .chat-window {
    padding:20px;
    background: #fafafa;
    font-family: 'Arial', sans-serif;
    text-align: left;
  }

  
  .messages {
  list-style: none;
  padding: 0;
  max-height: 500px; /* Adjust the height as needed */
  overflow-y: auto; /* Adds a scrollbar when the content overflows */
}

.single {
  padding: 8px 0;
}

.message-header {
  font-size: 12px;
  color: #999;
  margin-bottom: 4px; /* Adjust space between the date/time and the message */
}

.message-content {
  display: flex;
  align-items: baseline;
}

.created-at {
  display: block; /* Make the date/time display on its own line */
}

.name {
  font-weight: bold;
  color: #333;
  margin-right: 6px;
  flex-shrink: 0;
}

.message {
  color: #333;
  margin: 0;
  overflow-wrap: break-word;
}

  [role="alert"] {
    color: red;
    font-weight: bold;
  }
</style>
