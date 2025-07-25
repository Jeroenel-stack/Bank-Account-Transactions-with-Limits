
        class BankAccount {
            constructor(owner, balance = 0) {
                this.owner = owner;
                this.balance = balance;
                this.dailyWithdrawal = 0;
            }

            deposit(amount) {
                this.balance += amount;
                console.log(`${this.owner} deposited ₱${amount}. New balance: ₱${this.balance}`);
            }

            withdraw(amount) {
                if (amount > this.balance) {
                    console.log("Insufficient funds.");
                } else if (this.dailyWithdrawal + amount > 10000) {
                    console.log("Daily withdrawal limit exceeded.");
                } else {
                    this.balance -= amount;
                    this.dailyWithdrawal += amount;
                    console.log(`${this.owner} withdrew ₱${amount}. New balance: ₱${this.balance}`);
                }
            }

            resetDailyLimit() {
                this.dailyWithdrawal = 0;
            }
        }

        const account1 = new BankAccount("Jiro", 5000);
        account1.deposit(2000);
        account1.withdraw(3000);
        account1.withdraw(8000);
