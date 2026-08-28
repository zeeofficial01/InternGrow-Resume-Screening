def rank_candidates(candidates):
    """
    Rank candidates from highest to lowest resume score.
    """

    ranked_candidates = sorted(
        candidates,
        key=lambda candidate: candidate.get("resume_score", 0),
        reverse=True
    )

    for position, candidate in enumerate(ranked_candidates, start=1):
        candidate["rank"] = position

    return ranked_candidates