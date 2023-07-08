FE_DIR = ./frontend
BE_DIR = ./backend

.PHONY: all
all: build run

.PHONY: build
build:
	@npm run --prefix $(FE_DIR) build

.PHONY: run
run:
	@node $(BE_DIR)/app.js
	
.PHONY: clean
clean:
	@rm -rf $(FE_DIR)/build
