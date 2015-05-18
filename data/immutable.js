[
    {
        "name": "Collection",
        "imports": [
            "Iterable"
        ]
    },
    {
        "name": "Hash",
        "imports": [
            "Math"
        ]
    },
    {
        "name": "Immutable",
        "imports": [
            "Seq",
            "Collection",
            "OrderedMap",
            "List",
            "Map",
            "Stack",
            "OrderedSet",
            "Set",
            "Record",
            "Range",
            "Repeat",
            "is",
            "fromJS",
            "IterableImpl"
        ]
    },
    {
        "name": "Iterable",
        "imports": [
            "Seq"
        ]
    },
    {
        "name": "IterableImpl",
        "imports": [
            "Iterable",
            "is",
            "TrieUtils",
            "Hash",
            "Math",
            "Iterator",
            "assertNotInfinite",
            "forceIterator",
            "deepEqual",
            "mixin",
            "Map",
            "OrderedMap",
            "List",
            "Set",
            "OrderedSet",
            "Stack",
            "Seq",
            "Collection",
            "Operations"
        ]
    },
    {
        "name": "Iterator",
        "imports": []
    },
    {
        "name": "List",
        "imports": [
            "fromJS",
            "TrieUtils",
            "Iterable",
            "Collection",
            "Map",
            "Iterator",
            "assertNotInfinite"
        ]
    },
    {
        "name": "Map",
        "imports": [
            "is",
            "fromJS",
            "Iterable",
            "Collection",
            "TrieUtils",
            "Hash",
            "Iterator",
            "Operations",
            "forceIterator",
            "invariant",
            "assertNotInfinite",
            "OrderedMap"
        ]
    },
    {
        "name": "Math",
        "imports": []
    },
    {
        "name": "Operations",
        "imports": [
            "TrieUtils",
            "Iterable",
            "Iterator",
            "Seq",
            "assertNotInfinite",
            "Map",
            "OrderedMap"
        ]
    },
    {
        "name": "OrderedMap",
        "imports": [
            "Iterable",
            "Map",
            "List",
            "TrieUtils",
            "assertNotInfinite"
        ]
    },
    {
        "name": "OrderedSet",
        "imports": [
            "Iterable",
            "Set",
            "OrderedMap",
            "assertNotInfinite"
        ]
    },
    {
        "name": "Range",
        "imports": [
            "TrieUtils",
            "Seq",
            "Iterator",
            "invariant",
            "deepEqual"
        ]
    },
    {
        "name": "Record",
        "imports": [
            "Iterable",
            "Collection",
            "Map",
            "TrieUtils",
            "invariant"
        ]
    },
    {
        "name": "Repeat",
        "imports": [
            "TrieUtils",
            "Seq",
            "is",
            "Iterator",
            "deepEqual"
        ]
    },
    {
        "name": "Seq",
        "imports": [
            "TrieUtils",
            "Iterable",
            "Iterator",
            "isArrayLike"
        ]
    },
    {
        "name": "Set",
        "imports": [
            "Iterable",
            "Collection",
            "Map",
            "TrieUtils",
            "Operations",
            "assertNotInfinite",
            "OrderedSet"
        ]
    },
    {
        "name": "Stack",
        "imports": [
            "TrieUtils",
            "Iterable",
            "Collection",
            "Map",
            "Iterator",
            "assertNotInfinite"
        ]
    },
    {
        "name": "TrieUtils",
        "imports": []
    },
    {
        "name": "fromJS",
        "imports": [
            "Seq"
        ]
    },
    {
        "name": "is",
        "imports": []
    },
    {
        "name": "assertNotInfinite",
        "imports": [
            "invariant"
        ]
    },
    {
        "name": "createClass",
        "imports": []
    },
    {
        "name": "deepEqual",
        "imports": [
            "is",
            "TrieUtils",
            "Iterable"
        ]
    },
    {
        "name": "forceIterator",
        "imports": [
            "Iterable",
            "Iterator",
            "isArrayLike"
        ]
    },
    {
        "name": "invariant",
        "imports": []
    },
    {
        "name": "isArrayLike",
        "imports": []
    },
    {
        "name": "mixin",
        "imports": []
    }
]