package models

type Tree struct {
	ID      uint   `json:"id"`
	Name    string `json:"name"`
	Type    string `json:"type"`
	SubTree *Tree  `json:"sub_tree"`
}
