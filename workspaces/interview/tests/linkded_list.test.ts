import { compareNodes, deleteNode, fromString, insertNode, ListNode } from "../src/linked_list"

describe("Insert Nodes individually", () => {
    it("should create a unsorted linked list and return an object",  async () => {
        let root: ListNode
        root = insertNode(1, root)
        root = insertNode(2, root)
        root = insertNode(3, root)
        root = insertNode(10, root)
        root = insertNode(4, root)
        root = insertNode(5, root)

        expect(root).toEqual({
            data: 1,
            next:{
                data: 2,
                next: {
                    data: 3,
                    next: {
                        data: 10,
                        next: {
                            data: 4,
                            next: {
                                data: 5
                            }
                        }
                    }
                }
            }
        })
    })

    it("should create a sorted linked list and return an object",  async () => {
        let root: ListNode
        root = insertNode(1, root, true)
        root = insertNode(2, root, true)
        root = insertNode(3, root, true)
        root = insertNode(10, root, true)
        root = insertNode(4, root, true)
        root = insertNode(5, root, true)

        expect(root).toEqual({
            data: 1,
            next:{
                data: 2,
                next: {
                    data: 3,
                    next: {
                        data: 4,
                        next: {
                            data: 5,
                            next: {
                                data: 10
                            }
                        }
                    }
                }
            }
        })
    })

    it("should create a unsorted linked list from string and return an object", async () => {
        const list: ListNode = fromString("axbycezfg")

        expect(list).toEqual({
            data: "a",
            next: {
                data: "x",
                next: {
                    data: "b",
                    next: {
                        data: "y",
                        next: {
                            data: "c",
                            next: {
                                data: "e",
                                next: {
                                    data: "z",
                                    next: {
                                        data: "f",
                                        next: {
                                            data: "g"
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            }
        })
    })

    it("should create a sorted linked list from string and return an object", async () => {
        const list: ListNode = fromString("axbycezfg", true)

        expect(list).toEqual({
            data: "a",
            next: {
                data: "b",
                next: {
                    data: "c",
                    next: {
                        data: "e",
                        next: {
                            data: "f",
                            next: {
                                data: "g",
                                next: {
                                    data: "x",
                                    next: {
                                        data: "y",
                                        next: {
                                            data: "z"
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            }
        })
    })
})

describe("Delete a Node", () => {
    it("should delete a node from a unsorted linked list and return an object",  async () => {
        let root: ListNode
        root = insertNode(1, root)
        root = insertNode(2, root)
        root = insertNode(3, root)
        root = insertNode(10, root)
        root = insertNode(4, root)
        root = insertNode(5, root)

        expect(root).toEqual({
            data: 1,
            next:{
                data: 2,
                next: {
                    data: 3,
                    next: {
                        data: 10,
                        next: {
                            data: 4,
                            next: {
                                data: 5
                            }
                        }
                    }
                }
            }
        })

        root = deleteNode(root, 4)

        expect(root).toEqual({
            data: 1,
            next:{
                data: 2,
                next: {
                    data: 3,
                    next: {
                        data: 10,
                        next: {
                            data: 5,
                        }
                    }
                }
            }
        })
    })

    it("should delete a node from a sorted linked list and return an object",  async () => {
        let root: ListNode
        root = insertNode(1, root, true)
        root = insertNode(2, root, true)
        root = insertNode(3, root, true)
        root = insertNode(10, root, true)
        root = insertNode(4, root, true)
        root = insertNode(5, root, true)
        expect(root).toEqual({
            data: 1,
            next:{
                data: 2,
                next: {
                    data: 3,
                    next: {
                        data: 4,
                        next: {
                            data: 5,
                            next: {
                                data: 10
                            }
                        }
                    }
                }
            }
        })

        root = deleteNode(root, 4)
        expect(root).toEqual({
            data: 1,
            next:{
                data: 2,
                next: {
                    data: 3,
                    next: {
                        data: 5,
                        next: {
                            data: 10,
                        }
                    }
                }
            }
        })
    })
})

describe("Compare two strings", () => {
    it("should list1 less than list 2", async () => {
        const list1: ListNode = fromString("geeksa")
        const list2: ListNode = fromString("geeksb")
        expect(compareNodes(list1, list2)).toEqual(-1)
    })

    it("should list1 equal list 2", async () => {
        const list1: ListNode = fromString("geeks")
        const list2: ListNode = fromString("geeks")
        expect(compareNodes(list1, list2)).toEqual(0)
    })

    it("should list1 greater than list 2", async () => {
        const list1: ListNode = fromString("geeksz")
        const list2: ListNode = fromString("geeksb")
        expect(compareNodes(list1, list2)).toEqual(1)
    })

    it("should list1 longer and greater than list 2", async () => {
        const list1: ListNode = fromString("geeksbbcsd")
        const list2: ListNode = fromString("geeksb")
        expect(compareNodes(list1, list2)).toEqual(1)
    })

    it("should list1 shotter and less than list 2", async () => {
        const list1: ListNode = fromString("geeksb")
        const list2: ListNode = fromString("geeksbcdee")
        expect(compareNodes(list1, list2)).toEqual(-1)
    })
})
