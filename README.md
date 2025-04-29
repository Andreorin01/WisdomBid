# WisdomBid

WisdomBid is a web application where users can seek advice and others can provide answers for a fee. The best answer is rewarded with a share of the earnings.

## Features

### User Roles
1. **Advice Seeker**:  
   - Posts a question for free.
   - Selects the "Best Answer" from the responses.
2. **Advice Giver**:  
   - Pays 5 RON to submit an answer to a question.
   - Competes to have their answer selected as the "Best Answer."
3. **Admin**:  
   - Oversees payments and moderates the platform.

### Flow
1. Advice Seekers post questions.
2. Advice Givers pay 5 RON to submit their answers.
3. The Advice Seeker selects the "Best Answer."
4. The selected Advice Giver wins 30% of the total earnings from all 5 RON submissions for that question.

### Payments
- **Payment Gateway**: Stripe API is used for secure payment processing.
- Automatically tracks total payments and distributes 30% to the selected winner.

## Tech Stack

### Frontend
- **Framework**: React
- **Styling**: Tailwind CSS
- **Theme**: Digital Lavender (inspired by [Wix Color Trends](https://www.wix.com/blog/website-color-trends))

### Backend
- **Framework**: FastAPI
- **Language**: Python
- **Database**: PostgreSQL

### Payments
- **Integration**: Stripe API